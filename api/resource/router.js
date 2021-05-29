// build your `/api/resources` router here
const express = require("express");
const ResourcesModel = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  ResourcesModel.find()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => next(error));
});

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "The resource endpoint is working. Try another endpoint.",
  });
});

router.post("/", (req, res, next) => {
  const newResource = req.body;
  ResourcesModel.add(newResource)
    .then((id) => {
      res.status(200).json({
        resource_id: id,
        ...newResource,
      });
    })
    .catch((error) => next(error));
});

module.exports = router;
