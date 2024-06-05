const express = require('express');
const router = express.Router();
const Project = require('../models/project');


router.get('/projects', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  res.send("<h1>Hello world</h1>");
  console.log("router working");
  // Project.find({}, 'action')
  //   .then((data) => res.json(data))
  //   .catch(next);
  res.end;
});

// router.post('/projects', (req, res, next) => {
//   if (req.body.action) {
//     Project.create(req.body)
//       .then((data) => res.json(data))
//       .catch(next);
//       console.log("post created")
//   } else {
//     res.json({
//       error: 'The input field is empty',
//     });
//   }
// });

// router.delete('/projects/:id', (req, res, next) => {
//   Project.findOneAndDelete({ _id: req.params.id })
//     .then((data) => res.json(data))
//     .catch(next);
// });

module.exports = router;