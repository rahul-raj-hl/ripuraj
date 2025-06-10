import { connectToDB } from "../../lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

// Simple in-memory store for rate limiting
// Note: In production, use Redis or a database
const rateLimitStore = new Map();

// Rate limit checker
const checkRateLimit = (ip) => {
  const now = Date.now();
  const limit = 5; // 5 requests per minute
  const interval = 60 * 1000; // 1 minute

  const userRequests = rateLimitStore.get(ip) || [];
  const recentRequests = userRequests.filter((time) => now - time < interval);

  if (recentRequests.length >= limit) {
    return false;
  }

  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return true;
};

// Generate 4 digit OTP
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

// SMS sending function
const sendOTPviaSMS = async (phone, otp) => {
  const password = process.env.SMS_PASSWORD
  const url = `http://pertinaxsolution.com/api/mt/SendSMS?user=Ripuraj Agro&password=${password}&senderid=RIPUAG&channel=trans&DCS=0&flashsms=0&number=${phone}&text=Congratulations!
Your chance to win Gold %26 Silver coins is here. 
Enter the OTP ${otp} to claim your prize!
Absolutely Free. Limited time offer.
Ripuraj Agro.&route=13&Peid=1101587830000086432&DLTTemplateId=1107174540786881548`

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('SMS sending failed');
    }
    return true;
  } catch (error) {
    console.error('SMS Sending Error:', error);
    return false;
  }
};


// // Email sending function
// const sendOTPviaEmail = async (email, otp) => {
//   const nodemailer = require("nodemailer");

//   // Configure the transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // Use your email service provider
//     auth: {
//       user: "nandan.shri21@gmail.com", // Your email
//       pass: "Nandan@7782", // Your email password or app password
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: "nandan.shri21@gmail.com", // Your email
//     to: email,
//     subject: "Ripuraj Agro Gold Scheme",
//     text: `Thank you for participating in Ripuraj Gold %26 Silver Scheme! 
//             Keep your scratch coupon safe. 
//             We'll contact you soon for prize verification.`,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: ", info.response);
//     return true;
//   } catch (error) {
//     console.error("Email Sending Error:", error);
//     return false;
//   }
// };

// For Pages Router API route
export default async function handler(req, res) {
  try {
    // Connect to database
    await connectToDB();

    // Get request body (fixed for Pages Router)
    const { phone, countryCode } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        error: "Phone number is required",
      });
    }

    // Get IP address
    const ip = req.headers["x-forwarded-for"] || "anonymous";

    // Check rate limit
    // if (!checkRateLimit(ip)) {
    //   return res.status(429).json({
    //     success: false,
    //     error: "Too many requests. Please try again later.",
    //   });
    // }

    // Generate OTP
    const otp = generateOTP().toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

    // Find user by phone number or create new one
    let user = await User.findOne({ phone });

    if (user) {
      // Update existing user's OTP
      user.otp = {
        code: otp,
        expiresAt,
        verified: false,
      };
      // Ensure country field exists
      if (!user.address.country) {
          user.address.country = "India";
      }
    } else {
      // Create new user with minimal info
      user = new User({
        phone,
        otp: {
          code: otp,
          expiresAt,
          verified: false,
        },
        // Required fields with placeholder values
        email: `temp_${phone}@placeholder.com`,
        name: "Temporary User",
        address: {
          line1: "Pending",
          city: "Pending",
          pincode: "000000",
          state: "Pending",
          country: "IN",
          countryCode:countryCode
        },
      });
    }

    await user.save();

    // Send OTP via SMS
    const smsSent = await sendOTPviaSMS(phone, otp);

    return res.status(200).json({
      success: true,
      data: {
        timestamp: new Date().toISOString(),
        expiresIn: "5 minutes",
        smsSent: smsSent
      },
    });
  } catch (error) {
    console.error("OTP Generation Error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}
