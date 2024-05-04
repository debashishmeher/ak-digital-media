exports.home = (req, res, next) => {
  res.status(200).render("home");
};
exports.about = (req, res, next) => {
  res.status(200).render("about");
};
