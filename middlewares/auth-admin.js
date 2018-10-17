/*
  ./middlewares/auth-admin.js
  secure authenticated routes
*/

module.exports = function(req, res, next) {
  if (req.session.role === "admin") {
    next();
  } else {
    res.render("unauthorized");
  }
};
