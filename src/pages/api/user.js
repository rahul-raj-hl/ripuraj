import { connectToDB } from "../../lib/mongodb";
import User from "@/models/User";
import Coupon from "@/models/coupon";
import Form from "@/models/form";

export default async function handler(req, res) {
  await connectToDB()

  if (req.method === "POST") {
    try {
      let { userDetails, campaignId, couponCode, address } = req.body;

      // Normalize email input
      if (!userDetails.email || userDetails.email.trim() === "") {
        userDetails.email = null;
      }

      // Check if user exists by phone
      let user = await User.findOne({ phone: userDetails.phone });

      if (user) {
        // Check for duplicate email if provided
        if (userDetails.email) {
          const emailExists = await User.findOne({
            email: userDetails.email,
            _id: { $ne: user._id }, // exclude current user
          });

          if (emailExists) {
            return res.status(400).json({
              error: "Email already in use by another user.",
            });
          }
        }

        // Update user data
        Object.assign(user, userDetails);

        if (address) {
          user.address = address;
          user.markModified("address");
        }

        await user.save();

        // Check if user already registered for this campaign
        const existingForm = await Form.findOne({
          userId: user.userId,
          campaignId: campaignId,
        });

        if (existingForm) {
          return res.status(400).json({
            error: "User already registered for this campaign",
          });
        }

        const coupon = await Coupon.findOne({
          code: couponCode,
          campaignId: campaignId,
        });

        if (!coupon) {
          return res.status(400).json({ error: "Invalid coupon code" });
        }

        if (coupon.userId) {
          return res.status(400).json({ error: "Coupon already used" });
        }
      } else {
        // Creating a new user
        if (!userDetails.email || userDetails.email.trim() === "") {
          userDetails.email = null;
        }

        user = new User({
          ...userDetails,
          address,
        });

        await user.save();
      }

      // Get coupon again (outside if block)
      const coupon = await Coupon.findOne({
        code: couponCode,
        campaignId: campaignId,
      });

      if (!coupon) {
        return res.status(400).json({ error: "Invalid coupon code" });
      }

      // Update coupon with userId
      coupon.userId = user.userId;
      await coupon.save();

      // Create form entry
      const form = new Form({
        userId: user.userId,
        campaignId: campaignId,
        couponId: coupon._id,
      });
      await form.save();

      return res.status(200).json({
        message: "Registration successful",
        userId: user.userId,
        formId: form._id,
      });

    } catch (error) {
      console.error("Error:", error);

      if (error.code === 11000) {
        return res.status(400).json({
          error: "Duplicate entry error: This email or phone number is already in use.",
        });
      }

      if (error.name === 'ValidationError') {
        return res.status(400).json({
          error: `Validation error: ${error.message}`,
        });
      }

      return res.status(500).json({
        error: `Internal server error: ${error.message || 'Something went wrong'}`,
      }); 
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
