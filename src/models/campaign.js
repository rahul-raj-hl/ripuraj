import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    campaignId: { type: String, unique: true },
    campaignDetails: { type: Buffer, required: true }, // Binary Data (Blob Equivalent)
  },
  { timestamps: true }
);

const Campaign = mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema, "campaigns");
export default Campaign;
