module.exports = (knex, Review) => (params) => {
  return knex("reviews")
    .insert(params)
    .then(() => {
      return knex("reviews")
        .where(params)
        .select();
    })
    .then((reviews) => new Review(reviews.pop())) // create a review model out of the plain database response
    .catch((err) => {
      return Promise.reject(err);
  });
};
