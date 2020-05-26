module.exports = (knex, Employee) => params => {
  return knex('employees')
    .insert(params)
    .then(() => {
      return knex('employees')
        .where({ id: params.id })
        .select();
    })
    .then(employees => new Employee(employees.pop())) // create a user model out of the plain database response
    .catch(err => {
      if (
        err.message.match('duplicate key value') ||
        err.message.match('UNIQUE constraint failed')
      ) {
        return Promise.reject(new Error('That employee id already exists'));
      }
      return Promise.reject(err);
    });
};
