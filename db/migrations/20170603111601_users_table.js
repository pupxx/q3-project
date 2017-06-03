
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string("username").notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
