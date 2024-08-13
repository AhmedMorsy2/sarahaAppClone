import { Router } from "express";
import { user } from "./user.controller.js";

let userRouter = Router();

userRouter.get("/user/:id", user);

export default userRouter;
