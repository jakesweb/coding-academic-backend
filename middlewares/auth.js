/*
  ./middlewares/auth.js
  secure authenticated routes
*/

module.exports = function(req,res,next) {
  if (req.session.email && req.session.role) {
    next();
  } else {
    res.render('unauthorized');
  }
}
