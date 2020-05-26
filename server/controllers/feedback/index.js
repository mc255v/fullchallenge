const express = require("express");

module.exports = (models) => {
  /**
   * Controller Logic
   */
  const createFeedback = (req, res) => {
    models.feedback
      .create(req.body)
      .then((feedback) => res.status(201).json(feedback))
      .catch((err) => res.status(400).send(err.message));
  }

  const listFeedback = (req, res) => {
    models.feedback
      .list()
      .then((feedback) => res.status(200).json(feedback))
      .catch((err) => res.status(400).send(err.message));
  }

  const getFeedbackForReview = (req, res) => {
    const data = {}
    req.query.type === "review" ? 
      data["review_id"] = req.params.id
      :
      data["employee_id"] = req.params.id
    models.feedback
      .get(data)
      .then((feedback) => res.status(200).json(feedback))
      .catch((err) => res.status(400).send(err.message));
  }

  /**
   * Routes
   */
  const router = express.Router();
  router.post("/", createFeedback);
  router.get("/", listFeedback);
  router.get("/:id", getFeedbackForReview);
  return router;
};
