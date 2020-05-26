module.exports = (knex, Review) => ({ id }) => {
  return knex("reviews")
    .where({ id })
    .select()
    .then((reviews) => {
      if (reviews.length) return new Review(reviews.pop());

      throw new Error(`Error finding review #${id}`);
  });
};
