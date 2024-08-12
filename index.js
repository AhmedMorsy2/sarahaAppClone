import express from "express";
import { db } from "./Database/dbConnection.js";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => res.render("home.ejs"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
