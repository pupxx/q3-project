exports.up = function(knex) {
  return knex.schema.createTable('equipment', table => {
    table.increments()
    table.string('name').notNullable()
    table.timestamps(true, true);
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('equipment')
}
