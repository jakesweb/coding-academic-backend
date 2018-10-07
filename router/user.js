/*
  ./router/user.js
  routes for handling users interation with the database
*/
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');

router.post('/create', (req,res,next) => { 
  userController.create(req.body.email, req.body.password, function(err,user) {
    if (err) {
      res.send(err);
    } else {
      res.render('signupsuccess', {
        email: user.email
      });
    }
  });
});

module.exports = router;
