const login = (req, res) => {
  res.render("login.ejs");
};

const handleLogin = (req, res) => {
  res.redirect("/messages");
};

export { login, handleLogin };
