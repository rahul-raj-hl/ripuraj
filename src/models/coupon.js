import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, trim: true },
    campaignId: { 
      type: String, 
      ref: "Campaign", 
      required: true 
    }, // Foreign key reference
    userId: { 
      type: Number, 
      ref: "User", 
    }, // Foreign key reference
  },
  { timestamps: true }
);

// Create and export the model
const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema, "coupons");
export default Coupon;
