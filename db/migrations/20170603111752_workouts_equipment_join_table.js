exports.up = function(knex) {
  return knex.schema.createTable('workouts_equipment_join', table => {
    table.increments()
    table.integer('workout_id').references('workouts.id').onDelete('CASCADE')
    table.integer('equipment_id').references('equipment.id').onDelete('CASCADE')
    table.timestamps(true, true);
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('workouts_equipment_join')
}
