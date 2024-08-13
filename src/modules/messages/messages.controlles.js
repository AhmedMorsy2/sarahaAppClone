import QRCode from "qrcode";

const message = async (req, res) => {
  let url = `${req.protocol}://${req.get("host")}/user`;
  let qrCodeUrl;
  await QRCode.toDataURL(url)
    .then((url) => {
      qrCodeUrl = url;
      console.log(url);
    })
    .catch((err) => {
      console.error(err);
    });

  if (req.session.isLoggedIn) {
    res.render("message.ejs", { session: req.session, url, qrCodeUrl });
  } else {
    redirect("/login");
  }
};

export { message };
