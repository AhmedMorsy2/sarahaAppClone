import { Message } from "../../../Database/model/messages.model.js";

const user = async (req, res) => {
  res.render("user.ejs", { session: req.session, userId: req.params.id });
};

const sendMsg = async (req, res) => {
  req.body.user = req.params.id;
  await Message.insertMany(req.body);
  res.redirect("/user/" + req.params.id);
};

export { user, sendMsg };
