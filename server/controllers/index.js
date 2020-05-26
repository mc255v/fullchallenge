const express = require("express");
const router = express.Router();

const employeesRouter = require("./employees");
const reviewsRouter = require("./reviews");
const feedbackRouter = require("./feedback");

module.exports = (models) => {
  router.use("/employees", employeesRouter(models));
  router.use("/reviews", reviewsRouter(models));
  router.use("/feedback", feedbackRouter(models));

  return router;
};
