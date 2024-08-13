import { User } from "../../Database/model/user.model.js";

export const checkEmail = async (req, res) => {
  let isExist = await User.findOne({ email: req.body.email });
  if (isExist) {
    res.redirect("/register");
  }
};
