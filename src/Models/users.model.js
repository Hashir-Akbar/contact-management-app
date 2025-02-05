import mongoose from "mongoose";


const UsersModel = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email :{
        type: String,
        maxLength: [50, "Max length Exceed"],
        required: true,
        unique: true,
        trim: true,

    },
    password:{
        type: String,
        required: true,
        minlength: [50, "Minimum length Exceed"],
    }

}, {timestamps:true})