import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    userId: { 
      type: Number, 
      ref: "User", 
      required: true 
    }, // FK reference to User

    couponId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Coupon", 
      required: true 
    }, // FK reference to Coupon

    campaignId: { 
      type: String, 
      ref: "Campaign", 
      required: true 
    }, // FK reference to Campaign
  },
  { timestamps: true }
);

// Create and export the model
const Form = mongoose.models.Form || mongoose.model("Form", formSchema, "forms");
export default Form;
