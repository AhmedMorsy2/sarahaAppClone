const user = (req, res) => {
  res.render("user.ejs", { session: req.session });
};

export { user };
