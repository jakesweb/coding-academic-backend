/*
  ./router/index.js
  main router for express
*/
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("homepage", {
    title: "Coding Academic"
  });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.render("loggedout");
  } else {
    res.render("error", {
      error: "You are not logged in"
    });
  }
});

router.get("/showuser", (req, res) => {
  res.render("user", {
    email: req.session.email,
    role: req.session.role
  });
});

module.exports = router;
