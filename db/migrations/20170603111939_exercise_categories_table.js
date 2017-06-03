exports.up = function(knex) {
  return knex.schema.createTable('exercise_categories', table => {
    table.increments()
    table.string('exercise_category_name').notNullable()
    table.string('muscle_worked').notNullable()})
}

exports.down = (knex) => {
  return knex.schema.dropTable('exercise_categories')
}
