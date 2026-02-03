import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log("Mongo URI:", uri); 

    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};

export default connectDb;
