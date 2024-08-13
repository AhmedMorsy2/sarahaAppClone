import { User } from "../../../Database/model/user.model.js";
import bcrypt from "bcrypt";
const login = (req, res) => {
  res.render("login.ejs");
};

const handleLogin = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
    console.log("incorrect");

    return res.redirect("/login");
  }
  res.redirect("/messages");
};

export { login, handleLogin };
