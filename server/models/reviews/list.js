module.exports = (knex, Review) => () => {
  return Promise.resolve(
    knex("reviews")
      .select()
      .then((reviews) => reviews.map((review) => new Review(review)))
  );
};
