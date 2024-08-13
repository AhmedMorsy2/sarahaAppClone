import { Router } from "express";
import { handleRegister, register } from "./register.controlles.js";
import { checkEmail } from "../../middleware/checkEmail.js";

let registerRouter = Router();

registerRouter.get("/register", register);
registerRouter.post("/handleRegister", checkEmail, handleRegister);

export default registerRouter;
