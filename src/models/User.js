import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const connection = mongoose.connection; // Get Mongoose connection instance

// Only initialize AutoIncrement if it hasn't been initialized before
if (!connection.models.User) {
  const AutoIncrement = AutoIncrementFactory(connection);
  
  const userSchema = new mongoose.Schema(
    {
      userId: { type: Number, unique: true }, // Auto-increment field
      email: { type: String, lowercase: true, trim: true , default: null},
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phone: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /^[0-9]{10}$/, // Ensures only 10-digit numbers
      },
      address: {
        line1: { type: String, required: true },
        line2: { type: String },
        city: { type: String, required: true },
        // district: { type: String, required: true },
        pincode: { 
          type: String, 
          required: true, 
          match: /^[0-9]{6}$/, // Ensures only 6-digit pin codes
        },
        state: { type: String, required: true },
        country: { type: String, required: true },
        countryCode:{type: String, required: true}
      },
      // Add OTP related fields
      otp: { 
        code: { type: String },
        expiresAt: { type: Date },
        verified: { type: Boolean, default: false }
      }
    },
    { timestamps: true }
  );

  // Apply Auto-Increment plugin to `userId`
  userSchema.plugin(AutoIncrement, { inc_field: "userId" });

  // Create the model
  mongoose.model("User", userSchema, "users");
}

// Export the model
const User = mongoose.models.User;
export default User;
