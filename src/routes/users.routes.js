import { Router} from "express";
import UserControllers from "../controllers/users.controller";

let userRoute = Router();
let {registerUser, loginUser,getCurrentUserInfo} = UserControllers


userRoute.post("/register" , registerUser)
userRoute.post("/login" , loginUser)
userRoute.post("/getCurrentUserInfo" , getCurrentUserInfo)


export default userRoute