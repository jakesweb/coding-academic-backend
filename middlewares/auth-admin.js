/*
  ./middlewares/auth-admin.js
  secure authenticated routes
*/

module.exports = function(req,res,next) {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(401).end();
  }
}
