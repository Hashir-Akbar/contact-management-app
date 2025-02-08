import asyncHandler from "express-async-handler";
import {Users} from "../Models/users.model.js";

const createUser = asyncHandler(async (req, res) => {

    const {name, email, password} = req.body;




})