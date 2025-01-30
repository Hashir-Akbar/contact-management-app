import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({

    name :{
        type : String,
        required : [true, "name is required"],
    },
    number:{
        type : Number,
        required : [true,"Number is required"],
    },
    status:{
        type : String,
        enum: [
           "new",
           "old"
        ],
        default: "new",
    }

}, {timestamps:true})

export const Contact = mongoose.model('Contact',contactSchema)