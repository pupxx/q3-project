exports.up = function(knex) {
  return knex.schema.createTable('instructors', table => {
    table.increments()
    table.string("first_name").notNullable()
    table.string("last_name").notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('instructors')
}
