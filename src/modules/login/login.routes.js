import { Router } from "express";
import { handleLogin, login } from "./login.controlles.js";

let loginRouter = Router();

loginRouter.get("/login", login);

loginRouter.post("/handleLogin", handleLogin);

export default loginRouter;
