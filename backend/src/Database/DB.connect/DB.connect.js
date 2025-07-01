import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load environment variables

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  console.log("🔄 Connecting to:", uri);

  if (!uri) {
    console.error("❌ MONGO_URI not defined in .env");
    return;
  }

  try {
    await mongoose.connect(uri); // ✅ No need for extra options
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  }
};

export default connectDB;
