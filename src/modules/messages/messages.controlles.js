const message = (req, res) => {
  console.log(req.session);

  if (req.session.isLoggedIn) {
    res.render("message.ejs");
  } else {
    redirect("/login");
  }
};

export { message };
