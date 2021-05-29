// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");
const ResourceRouter = require("./resource/router");

const server = express();

server.use(express.json(), helmet());

server.use("/api/resource", ResourceRouter);

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
