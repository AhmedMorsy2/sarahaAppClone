import { Router } from "express";
import { message } from "./messages.controlles.js";

let messageRouter = Router();

messageRouter.get("/messages", message);

export default messageRouter;
