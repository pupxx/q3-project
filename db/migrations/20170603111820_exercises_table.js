exports.up = function(knex) {
  return knex.schema.createTable('exercises', table => {
    table.increments()
    table.string('exercise_name').notNullable()
    table.string('demo_url').defaultTo('www')
    table.integer('equipment_id').references('equipment.id').onDelete('CASCADE')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('exercises')
}
