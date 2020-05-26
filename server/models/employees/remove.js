module.exports = (knex, User) => ({ id }) => {
    return Promise.resolve(
      knex('employees')
        .where({ id })
        .del()
        .then((res) => {
          console.log(res)
          if (res === 1) return "success";
  
          throw new Error(`Error removing employee #${id}`);
        })
    );
};
