/*
  ./router/admin.js
  routes for handling admin routes
*/
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course-controller');
const authAdmin = require('../middlewares/auth-admin');

router.get('/admin', authAdmin, (req,res) => { 
  res.render('admin');
});

router.get('/course', authAdmin, (req,res) => {
  // Course.find({}, 'name description', (err,docs) => {
  //   if (err) {
  //     res.json({ 'error': err });
  //   } else {
  //     res.json(docs);
  //   }
  // });
});

router.get('/course/:name', authAdmin, (req,res) => {
  // Course.find({ name: req.params.name }, 'name description', (err,docs) => {
  //   if (err) {
  //     res.json({ 'error': err });
  //   } else {
  //     res.json(docs);
  //   }
  // });
});

router.post('/course', authAdmin, (req,res) => {
  if (!req.body.name && !req.body.description) {
    return res.render('error', {
      error: "No course defined"
    });
  } else {
    courseController.create(req.body.name, req.body.description, (err,course) => {
      if (err) {
        return res.render('error', {
          error: err
        });
      } else {
        res.render('course-admin', {
          create: true
        });
      }
    });
  }
});

router.put('/course/:name/:desc', authAdmin, (req,res) => {
  // Course.update({ name: req.params.name }, { description: req.params.desc }, (err,ret) => {
  //   if (err) {
  //     return res.json({ 'error': err }); 
  //   } else {
  //     return res.json(ret);
  //   }
  // });
});

router.put('/course/:name/:name', authAdmin, (req,res) => {
  // Course.update({ name: req.params.name }, { name: req.params.name }, (err,ret) => {
  //   if (err) {
  //     return res.json({ 'error': err }); 
  //   } else {
  //     return res.json(ret);
  //   }
  // });
});

router.put('/course/:name/:video', authAdmin, (req,res) => {
  // Course.update({ name: req.params.name }, { videoLink: req.params.video }, (err,ret) => {
  //   if (err) {
  //     return res.json({ 'error': err }); 
  //   } else {
  //     return res.json(ret);
  //   }
  // });
});

router.delete('/course/:name', authAdmin, (req,res) => {
  courseController.delete(req.params.name, (err) => {
    if (err) {
      res.json({ 'result': err });
    } else {
      res.json({ 'result': 'success' });
    }
  })
});

module.exports = router;
