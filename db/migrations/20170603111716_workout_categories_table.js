exports.up = function(knex) {
  return knex.schema.createTable('workout_categories', table => {
    table.increments()
    table.string('name').notNullable()
    table.timestamps(true, true);
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('workout_categories')
}
