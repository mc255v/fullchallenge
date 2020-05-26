module.exports = (knex, Employee) => {
  return ({id, name, position, start_date }) => {
    return knex("employees")
      .where({ id })
      .update({ name, position, start_date })
      .then((res) => {
        if (res === 1) return "success";

        throw new Error(`Error finding employee #${id}`);
      });
  };
};
