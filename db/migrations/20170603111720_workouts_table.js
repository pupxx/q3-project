exports.up = function(knex) {
  return knex.schema.createTable('workouts', table => {
    table.increments()
    table.string("title").notNullable()
    table.integer('instructor_id').references('instructors.id').onDelete('CASCADE')
    table.integer('workout_category_id').references('workout_categories.id').onDelete('CASCADE')
    table.timestamps(true, true);
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('workouts')
}
