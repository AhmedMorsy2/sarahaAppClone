import { User } from "../../../Database/model/user.model.js";
import bcrypt from "bcrypt";
const register = (req, res) => {
  res.render("register.ejs", { session: req.session, error: req.query.error });
};

const handleRegister = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  await User.insertMany(req.body);
  res.redirect("/login");
};

export { register, handleRegister };
