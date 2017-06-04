exports.up = function(knex) {
  return knex.schema.createTable('paper_sessions_exercises_join', table => {
    table.increments()
    table.integer('paper_session_id').references('paper_sessions.id').onDelete('CASCADE')
    table.integer('exercise_id').references('exercises.id').onDelete('CASCADE')
    table.timestamps(true, true);
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('paper_sessions_exercises_join')
}
