exports.up = function(knex, Promise) {
  return knex.schema.createTable("employee_feedback", (t) => {
    t.increments()

    t.integer("review_id")
      .unsigned()
      .notNullable();

    t.foreign("review_id")
      .references("reviews.id")
      .onDelete("CASCADE");

    t.string("employee_id")
      .notNullable();

    t.foreign("employee_id")
      .references("employees.id")
      .onDelete("CASCADE");

    t.boolean("completed")
      .notNullable()
      .defaultTo(false);

    t.string("feedback")
      .notNullable()
      .defaultTo("");

    t.timestamp("assigned_date")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("employee_feedback");
};