import { connectToDB } from "../../lib/mongodb";
import User from "@/models/User";

// Simple in-memory store for rate limiting
// Note: In production, use Redis or a database
const rateLimitStore = new Map();

// Rate limit checker
const checkRateLimit = (ip) => {
  const now = Date.now();
  const limit = 5; // 5 requests per minute
  const interval = 60 * 1000; // 1 minute

  const userRequests = rateLimitStore.get(ip) || [];
  const recentRequests = userRequests.filter(time => now - time < interval);

  if (recentRequests.length >= limit) {
    return false;
  }

  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return true;
};

export async function POST(req, res) {
  try {
    // Connect to database
    await connectToDB();

    const { phone, otp } = req.body;

    // Validate input
    if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        error: 'Phone number and OTP are required'
      });
    }

    // Get IP address for rate limiting
    // const ip = req.headers.get('x-forwarded-for') || 'anonymous';

    // Check rate limit
    // if (true || !checkRateLimit(ip)) {
    //   return res.status(429).json({
    //     success: false,
    //     error: 'Too many requests. Please try again later.'
    //   });
    // }

    // Find user by phone number
    const user = await User.findOne({ phone });
    // console.log(user);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Check if OTP exists and is not expired
    if (!user.otp || !user.otp.code || !user.otp.expiresAt) {
      return res.status(400).json({
        success: false,
        error: 'No OTP found. Please request a new OTP.'
      });
    }

    // Check if OTP is expired
    if (new Date() > user.otp.expiresAt) {
      return res.status(400).json({
        success: false,
        error: 'OTP has expired. Please request a new OTP.'
      });
    }

    // Validate OTP
    if (user.otp.code !== otp) {
      return res.status(400).json({
        success: false,
        error: 'Invalid OTP'
      });
    }

    // Mark OTP as verified
    user.otp.verified = true;
    await user.save();

    return res.status(200).json({
      success: true,
      data: {
        message: 'OTP verified successfully',
        phone: user.phone
      }
    });

  } catch (error) {
    console.error('OTP Validation Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

export default POST;
