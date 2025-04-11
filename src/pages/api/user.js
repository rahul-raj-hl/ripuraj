import { connectToDB } from "../../lib/mongodb";
import User from "@/models/User";
import Coupon from "@/models/coupon";
import Form from "@/models/form";

export default async function handler(req, res) {
  await connectToDB();
  if (req.method === "POST") {
    try {
      const { userDetails, campaignId, couponCode, address } = req.body;

      // 1. Check if user exists by phone
      let user = await User.findOne({ phone: userDetails.phone });
      console.log(user);
      if (user) {
        // Check if user is already registered for this campaign
        const existingForm = await Form.findOne({
          userId: user.userId,
          campaignId: campaignId,
        });

        if (existingForm) {
          return res
            .status(400)
            .json({ error: "User already registered for this campaign" });
        }

        const coupon = await Coupon.findOne({
          code: couponCode,
          campaignId: campaignId,
        });

        if (!coupon && coupon.userId) {
          return res.status(400).json({ error: "Invalid coupon code" });
        }

        // Check if coupon is already used
        if (coupon.userId) {
          return res.status(400).json({ error: "Coupon already used" });
        }
      } else {
        // Create new user
        user = new User({
          ...userDetails,
          address,
        });
        await user.save();
      }

      // Get the coupon
      const coupon = await Coupon.findOne({
        code: couponCode,
        campaignId: campaignId,
      });

      if (!coupon || coupon.userId) {
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
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
