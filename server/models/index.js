module.exports = function(knex) {
  return {
    employees: require('./employees')(knex),
    reviews: require('./reviews')(knex),
    feedback: require('./feedback')(knex),
  };
};
