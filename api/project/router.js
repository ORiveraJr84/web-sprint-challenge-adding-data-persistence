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
    message: "The project endpoint is working. Try another endpoint.",
  });
});

router.post("/", (req, res, next) => {
  const newProject = req.body;
  ProjectModel.add(newProject)
    .then((retrievedNewProject) => {
      res.status(200).json(retrievedNewProject);
    })
    .catch((error) => next(error));
});

module.exports = router;
