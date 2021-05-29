// build your `/api/tasks` router here
const express = require("express");
const TasksModel = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  TasksModel.find()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => next(error));
});

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "The task endpoint is working. Try another endpoint.",
  });
});

router.post("/", (req, res, next) => {
  const newTask = req.body;
  TasksModel.add(newTask)
    .then((id) => {
      res.status(200).json({
        task_id: id,
        ...newTask,
      });
    })
    .catch((error) => next(error));
});

module.exports = router;
