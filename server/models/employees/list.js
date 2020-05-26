module.exports = (knex, Employee) => () => {
    return Promise.resolve(
      knex("employees")
        .select()
        .then((employees) => employees.map((employee) => new Employee(employee)))
    );
};