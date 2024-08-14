import { Router } from "express";
import { sendMsg, user } from "./user.controller.js";

let userRouter = Router();

userRouter.get("/user/:id", user);
userRouter.post("/sendMsg/:id", sendMsg);
export default userRouter;
