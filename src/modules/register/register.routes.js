import { Router } from "express";
import { register } from "./register.controlles.js";

let registerRouter = Router();

registerRouter.get("/register", register);

export default registerRouter;
