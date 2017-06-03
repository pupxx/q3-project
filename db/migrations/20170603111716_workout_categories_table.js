exports.up = function(knex) {
  return knex.schema.createTable('workout_categories', table => {
    table.increments()
    table.string('type').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('workout_categories')
}
