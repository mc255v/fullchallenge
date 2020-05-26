exports.up = function(knex, Promise) {
  // create the 'employees' table with four columns
  return knex.schema.createTable("employees", (t) => {
    t.string("id", 10) 
      .unique() 
      .notNullable() 
    
    t.string("name")
      .notNullable()
    
    t.string("position")
      .notNullable()

    t.timestamp("start_date")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  // undo this migration by destroying the 'employees' table
  return knex.schema.dropTable("employees");
};
