import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const connection = mongoose.connection; // Get Mongoose connection instance
const AutoIncrement = AutoIncrementFactory(connection); // Initialize Auto-Increment

const userSchema = new mongoose.Schema(
  {
    userId: { type: Number, unique: true }, // Auto-increment field
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { 
      type: String, 
      required: true, 
      unique: true, 
      match: /^[0-9]{10}$/, // Ensures only 10-digit numbers
    },
    address: {
      line1: { type: String, required: true },
      city: { type: String, required: true },
      district: { type: String, required: true },
      pincode: { 
        type: String, 
        required: true, 
        match: /^[0-9]{6}$/, // Ensures only 6-digit pin codes
      },
      state: { type: String, required: true },
    }
  },
  { timestamps: true }
);

// Apply Auto-Increment plugin to `userId`
userSchema.plugin(AutoIncrement, { inc_field: "userId" });

// Create and export the model
const User = mongoose.models.User || mongoose.model("User", userSchema, "users");
export default User;
