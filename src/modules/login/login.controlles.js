import { User } from "../../../Database/model/user.model.js";
import bcrypt from "bcrypt";
const login = (req, res) => {
  res.render("login.ejs");
};

const handleLogin = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user || !bcrypt.compareSync(req.body.password, user.password)) 
    return res.redirect("/login");
  
    req.session.isLoggedIn = true;
    req.session.userId = user._id;
    req.session.name = user.name;
    res.redirect("/messages");
  
};

export { login, handleLogin };
