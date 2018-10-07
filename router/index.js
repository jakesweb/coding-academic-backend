/*
  ./router/index.js
  main router for express
*/
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('homepage', {
    title: "Coding Academic"
  });
});

router.get('/signup', (req,res) => {
  res.render('signup');
});

module.exports = router;
