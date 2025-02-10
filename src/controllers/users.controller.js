import asyncHandler from "express-async-handler";
import { Users } from "../Models/users.model.js";
import bcrypt from "bcrypt";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if(!name || !email || !password){
    res.status(500)
    throw new Error("All Fields Required")
  }
  const hash = bcrypt.hashSync(password, 14);

  const register = Users.create({ name, email, password: hash });

  res.status(201).send("User Registered Successfully")
});

const loginUser = asyncHandler(async (req, res) => {});

const getCurrentUserInfo = asyncHandler(async (req, res) => {});

const UserControllers = {
  registerUser,
  loginUser,
  getCurrentUserInfo,
};

export default UserControllers;
