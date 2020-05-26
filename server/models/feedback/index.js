const moment = require("moment");

const Feedback = function(dbFeedback) {
  this.id = dbFeedback.id;
  this.review_id = dbFeedback.review_id;
  this.employee_id = dbFeedback.employee_id;
  this.completed = dbFeedback.completed === 1 ? true : false;
  this.feedback = dbFeedback.feedback
  this.assigned_date = moment(dbFeedback.assigned_date).format('YYYY-MM-DD');
};

module.exports = (knex) => ({
  create: require("./create")(knex, Feedback),
  list: require("./list")(knex, Feedback),
  get: require("./get")(knex, Feedback)
});
