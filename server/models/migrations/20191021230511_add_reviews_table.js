exports.up = function(knex, Promise) {
  return knex.schema.createTable("reviews", (t) => {
    t.increments()
      .unique()
      .notNullable()

    t.string("employee_id") 
      .notNullable()
    
    t.foreign("employee_id")
      .references("employees.id")
      .onDelete("CASCADE");

    t.timestamp("created_date")
      .notNullable()
      .defaultTo(knex.fn.now());

    t.string("q1") 
      .notNullable()
      .defaultTo("1");

    t.string("q2") 
      .notNullable()
      .defaultTo("2");

    t.string("q3") 
      .notNullable()
      .defaultTo("");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("reviews");
};
