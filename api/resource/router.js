// build your `/api/resources` router here
const express = require("express");
const ResourceModel = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    const something = ResourceModel.find();
    console.log(something);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "The resource endpoint is working. Try another endpoint.",
  });
});

router.post("/", (req, res, next) => {
  next();
});

module.exports = router;
