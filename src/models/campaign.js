import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";
import { string } from "yup";

const connection = mongoose.connection; // Get Mongoose connection instance
const AutoIncrement = AutoIncrementFactory(connection); // Initialize Auto-Increment

const campaignSchema = new mongoose.Schema(
  {
    campaignId: { type: string, unique: true }, // Auto-increment field
    campaignDetails: { type: Buffer, required: true }, // Binary Data (Blob Equivalent)
  },
  { timestamps: true }
);

// Apply Auto-Increment plugin to `campaignId`
campaignSchema.plugin(AutoIncrement, { inc_field: "campaignId" });

const Campaign = mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema, "campaigns");
export default Campaign;
