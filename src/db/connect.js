import mongoose from "mongoose";
import asyncHandler from "express-async-handler";



const connectDb = asyncHandler(async function connectDb () {
  const connect = await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to DB")
})



export default connectDb;

