// build your `/api/projects` router here
const express = require("express");
const ProjectModel = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  ProjectModel.find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => next(error));
});

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "The resource endpoint is working. Try another endpoint.",
  });
});

router.post("/", (req, res, next) => {
  const newProject = req.body;
  ProjectModel.add(newProject)
    .then((id) => {
      res.status(200).json({
        resource_id: id,
        ...newProject,
      });
    })
    .catch((error) => next(error));
});

module.exports = router;
