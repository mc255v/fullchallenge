const express = require("express");

module.exports = (models) => {
  /**
   * Controller Logic
   */
  const createEmployee = (req, res) => {
    models.employees
      .create(req.body)
      .then((employee) => res.status(201).json(employee))
      .catch((err) => {
        if (err.message === "That employee id already exists") {
          return models.users
            .get({ id: req.body.id })
            .then((employee) => res.status(200).json(employee));
        }
        return res.status(400).send(err.message);
      });
  }

  const listEmployees = (req, res) => {
    models.employees
      .list()
      .then((employees) => res.status(200).json(employees))
      .catch((err) => res.status(400).send(err.message));
  }

  const getEmployee = (req, res) => {
    models.employees
      .get({ id: req.params.id })
      .then((messages) => res.status(200).json(messages))
      .catch((err) => res.status(400).send(err.message));
  }

  const updateEmployee = (req, res) => {
    models.employees
      .update(req.body)
      .then((messages) => res.status(200).json(messages))
      .catch((err) => res.status(400).send(err.message));
  }

  const removeEmployee = (req, res) => {
    models.employees
      .remove({ id: req.params.id })
      .then((messages) => res.status(200).json(messages))
      .catch((err) => res.status(400).send(err.message));
  }

  const customList = (req, res) => {
    models.employees
      .customList(req.body)
      .then((employees) => res.status(200).json(employees))
      .catch((err) => res.status(400).send(err.message));
  }
  /**
   * Routes
   */
  const router = express.Router();
  router.post("/", createEmployee);
  router.get("/", listEmployees);
  router.get("/:id", getEmployee);
  router.post("/:id", updateEmployee);
  router.delete("/:id", removeEmployee);
  router.post("/custom/list", customList);
  return router;
};
