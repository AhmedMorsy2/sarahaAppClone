import QRCode from "qrcode";
import { Message } from "../../../Database/model/messages.model.js";

const message = async (req, res) => {
  let url = `${req.protocol}://${req.get("host")}/user/${req.session.userId}`;
  let qrCodeUrl;
  await QRCode.toDataURL(url)
    .then((url) => {
      qrCodeUrl = url;
    })
    .catch((err) => {
      console.error(err);
    });

  let messages = await Message.find({ user: req.session.userId });

  if (req.session.isLoggedIn) {
    res.render("message.ejs", {
      session: req.session,
      url,
      qrCodeUrl,
      messages,
    });
  } else {
    res.redirect("/login");
  }
};

export { message };
