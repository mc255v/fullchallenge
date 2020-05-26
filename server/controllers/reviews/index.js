const express = require("express");

module.exports = (models) => {
  /**
   * Controller Logic
   */
  const createReview = (req, res) => {
    models.reviews
    .create(req.body)
    .then((review) => res.status(201).json(review))
    .catch((err) => res.status(400).send(err.message));
  }

  const listReviews = (req, res) => {
    models.reviews
      .list()
      .then((reviews) => res.status(200).json(reviews))
      .catch((err) => res.status(400).send(err.message));
  }

  const getReview = (req, res) => {
    models.reviews
      .get({ id: req.params.id })
      .then((review) => res.status(200).json(review))
      .catch((err) => res.status(400).send(err.message));
  }

  const updateReview = (req, res) => {
    models.reviews
      .update(req.body)
      .then((review) => res.status(200).json(review))
      .catch((err) => res.status(400).send(err.message));
  }

  /**
   * Routes
   */
  const router = express.Router();
  router.post("/", createReview);
  router.get("/", listReviews);
  router.get("/:id", getReview);
  router.post("/:id", updateReview);
  return router;
};
