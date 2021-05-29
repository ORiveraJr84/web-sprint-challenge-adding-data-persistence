// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");
const ResourcesRouter = require("./resource/router");
const ProjectsRouter = require("./project/router");
const TasksRouter = require("./task/router");

const server = express();

server.use(express.json(), helmet());

server.use("/api/resources", ResourcesRouter);
server.use("/api/projects", ProjectsRouter);
server.use("/api/tasks", TasksRouter);

server.use("/", (req, res) => {
  res
    .status(200)
    .json({ message: "API is up and running. Visit an endpoint to test" });
});

server.use("/", (error, req, res, next) => {
  console.log(error);
  res.status(500).json({ message: "Something went wrong.", err: error });
});

module.exports = server;
