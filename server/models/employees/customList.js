module.exports = (knex) => ({query, where}) => {
    return Promise.resolve(
      knex("employees")
        .select(...query)
        .where(...where)
    );
};