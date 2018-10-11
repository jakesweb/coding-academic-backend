/*
  ./router/admin.js
  routes for handling admin routes
*/
const express = require('express');
const router = express.Router();

const authAdmin = require('../middlewares/auth-admin');

router.get('/admin', authAdmin, (req,res) => { 
  res.render('admin');
});

module.exports = router;
