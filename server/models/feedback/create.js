module.exports = (knex, Feedback) => (params) => {
    return knex("employee_feedback")
      .insert(params)
      .then(() => "success")
      .catch(err => new Error(`Error assigning feedback`))
};
