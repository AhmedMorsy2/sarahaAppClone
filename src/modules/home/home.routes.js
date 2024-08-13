import { Router } from "express";
import { home } from "./home.controlles.js";

let homeRouter = Router();

homeRouter.get("/", home);

export default homeRouter;
