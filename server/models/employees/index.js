const moment = require('moment');

const Employee = function(dbEmployee) {
  this.id = dbEmployee.id;
  this.name = dbEmployee.name;
  this.position = dbEmployee.position;
  this.start_date = moment(dbEmployee.start_date).format('YYYY-MM-DD');
};

module.exports = (knex) => {
  return {
    create: require("./create")(knex, Employee),
    get: require("./get")(knex, Employee),
    list: require("./list")(knex, Employee),
    customList: require("./customList")(knex),
    remove: require("./remove")(knex, Employee),
    update: require("./update")(knex, Employee)
  };
};
