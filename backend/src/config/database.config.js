import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("Please provide MONGODB_URI in .env file");
  }
  let client = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`Database connected to ${client.connection.host}`);
};
