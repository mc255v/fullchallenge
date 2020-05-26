const moment = require('moment');

const Review = function(dbReview) {
  this.id = dbReview.id;
  this.employee_id = dbReview.employee_id;
  this.created_date = moment(dbReview.created_date).format('YYYY-MM-DD');
  this.q1 = dbReview.q1;
  this.q2 = dbReview.q2;
  this.q3 = dbReview.q3;
};

module.exports = (knex) => {
  return {
    create: require("./create")(knex, Review),
    get: require("./get")(knex, Review),
    list: require("./list")(knex, Review),
    update: require("./update")(knex, Review)
  };
};
