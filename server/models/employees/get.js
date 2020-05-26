module.exports = (knex, Employee) => ({ id }) => {
  return knex('employees')
    .where({ id })
    .select()
    .then(employees => {
      if (employees.length) return new Employee(employees.pop());

      throw new Error(`Error finding employee #${id}`);
    });
};
