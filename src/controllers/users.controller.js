import asyncHandler from "express-async-handler";
import {Users} from "../Models/users.model.js";

const registerUser = asyncHandler(async (req, res) => {

    const {name, email, password} = req.body;




})


const loginUser = asyncHandler(async (req, res) =>{

})

const getCurrentUserInfo = asyncHandler(async (req,res) =>{

})

const UserControllers = {
    registerUser,
    loginUser,
    getCurrentUserInfo
}

export default UserControllers