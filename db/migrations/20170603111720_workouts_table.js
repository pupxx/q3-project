exports.up = function(knex) {
  return knex.schema.createTable('workouts', table => {
    table.increments()
    table.string("title").notNullable()
    table.integer('dvd_session_id').references('dvd_sessions.id').onDelete('CASCADE')
    table.integer('instructor_id').references('instructors.id').onDelete('CASCADE')
    table.integer('workout_category_id').references('workout_categories.id').onDelete('CASCADE')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('workouts')
}
