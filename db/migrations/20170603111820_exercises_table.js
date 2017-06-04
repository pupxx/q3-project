exports.up = function(knex) {
  return knex.schema.createTable('exercises', table => {
    table.increments()
    table.string('exercise_name').notNullable()
    table.string('demo_url').defaultTo('https://www.youtube.com/watch?v=E6VMg0E9JpE')
    table.integer('equipment_id').references('equipment.id').onDelete('CASCADE')
    table.timestamps(true, true);
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('exercises')
}
