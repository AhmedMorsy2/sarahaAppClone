import express from "express";
import { db } from "./Database/dbConnection.js";
import homeRouter from "./src/modules/home/home.routes.js";
import loginRouter from "./src/modules/login/login.routes.js";
import registerRouter from "./src/modules/register/register.routes.js";
import messageRouter from "./src/modules/messages/messages.routes.js";
import userRouter from "./src/modules/user/user.routes.js";
import session from "express-session";
import mongoSession from "connect-mongodb-session";
let MongoDBStore = mongoSession(session);

var store = new MongoDBStore({
  uri: "mongodb://localhost:27017/sarahaClone",
  collection: "mySessions",
});

const app = express();
const port = 3000;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store,
  })
);
app.set("views", "views");
app.set("view engine ", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(homeRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(messageRouter);
app.use(userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
