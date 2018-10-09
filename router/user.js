/*
  ./router/user.js
  routes for handling users interation with the database
*/
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');

router.post('/create', (req,res) => { 
  userController.create(req.body.email, req.body.password, (err,user) => {
    if (err) {
      res.send(err);
    } else {
      res.render('signupsuccess', {
        email: user.email
      });
    }
  });
});

router.post('/use', (req,res) => {
  userController.find(req.body.email, req.body.password, (err,email,role) => {
    if (err) {
      res.render('error', {
        error: err
      })
    } else {
      if (!req.session.email && !req.session.role) {
        req.session.email = email;
        req.session.role = role;
        res.redirect('/');
      } else {
        res.render('error', {
          error: "You are already logged in"
        });
      }
    }
  });
});

module.exports = router;
