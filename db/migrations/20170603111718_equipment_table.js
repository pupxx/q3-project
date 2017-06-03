exports.up = function(knex) {
  return knex.schema.createTable('equipment', table => {
    table.increments()
    table.string('equipment_type').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('equipment')
}
