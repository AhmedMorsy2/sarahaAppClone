import { Router } from "express";
import { login } from "./login.controlles.js";

let loginRouter = Router();

loginRouter.get("/login", login);

export default loginRouter;
