const message = (req, res) => {
  console.log(req.session);

  if (req.session.isLoggedIn) {
    res.render("message.ejs", { session: req.session });
  } else {
    redirect("/login");
  }
};

export { message };
