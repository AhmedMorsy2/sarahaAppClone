import { Router } from "express";
import { user } from "./user.controller.js";

let userRouter = Router();

userRouter.get("/user", user);

export default userRouter;
