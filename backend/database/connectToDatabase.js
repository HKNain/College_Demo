import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/clg");
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(" Error connecting to Mongodb", error.message);
  }
};

export default connectToDatabase;