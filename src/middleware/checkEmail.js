import { User } from "../../Database/model/user.model.js";

export const checkEmail = async (req, res, next) => {
  let isExist = await User.findOne({ email: req.body.email });
  if (isExist) {
    return res.redirect("/register?error=Email already exist");
  }
  next();
};
