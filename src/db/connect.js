import mongoose from "mongoose";



const connectDb = async function connectDb () {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to DB")
  }catch(err) {
    console.log("Db Connection Error")
    throw new Error(err)
  }

}



export default connectDb;

