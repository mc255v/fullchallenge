module.exports = (knex, Review) => (params) => {
  return knex("reviews")
    .where({ id: params.id })
    .update(params)
    .then((res) => {
      if (res === 1) return "success";

      throw new Error(`Error finding employee #${id}`);
    });
};
