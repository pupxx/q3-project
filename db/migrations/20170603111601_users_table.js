
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string("username").notNullable()
    table.timestamps(true, true);

  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
