exports.up = function(knex) {
  return knex.schema.createTable('exercise_categories', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('muscle_worked')
    table.timestamps(true, true);
}

exports.down = (knex) => {
  return knex.schema.dropTable('exercise_categories')
}
