/*
  ./router/admin.js
  routes for handling admin routes
*/
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course-controller");
const authAdmin = require("../middlewares/auth-admin");

router.get("/admin", authAdmin, (req, res) => {
  res.render("admin");
});

/*
  List all courses
*/
router.get("/course", authAdmin, (req, res) => {
  courseController.findAll((err, course) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(course);
    }
  });
});

/*
  List course by name
  :name  - name of the course to list
*/
router.get("/course/:name", authAdmin, (req, res) => {
  courseController.findByName(req.params.name, (err, course) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(course);
    }
  });
});

/*
  Create course
  name and description in body of request
*/
router.post("/course", authAdmin, (req, res) => {
  if (!req.body.name && !req.body.description) {
    return res.render("error", {
      error: "No course defined"
    });
  } else {
    courseController.create(
      req.body.name,
      req.body.description,
      (err, course) => {
        if (err) {
          return res.render("error", {
            error: err
          });
        } else {
          res.render("course-admin", {
            create: true
          });
        }
      }
    );
  }
});

/*
  Update the course
  :name  - name of course
  :key   - key to update
  :value - value to update key to
*/
router.put("/course/:name/:key/:value", authAdmin, (req, res) => {
  courseController.updateCourse(
    req.params.name,
    req.params.key,
    req.params.value,
    (err, course) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json(course);
      }
    }
  );
});

/*
  Delete course by name
  :name  - name of course to be deleted
*/
router.delete("/course/:name", authAdmin, (req, res) => {
  courseController.delete(req.params.name, err => {
    if (err) {
      res.json({ result: err });
    } else {
      res.json({ result: "success" });
    }
  });
});

module.exports = router;
