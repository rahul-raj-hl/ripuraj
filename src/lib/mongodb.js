import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://rahulraj:rahulraj@cluster0.ohykh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

console.log("MONGODB_URI", MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}

// Use a global variable to prevent multiple connections in dev mode
let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) return cached.conn; // Use existing connection

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("MongoDB connected successfully");
      return mongoose;
    }).catch((error) => {
      console.error("MongoDB connection error:", error);
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  global.mongoose = cached; // Store connection globally
  return cached.conn;
}
