exports.up = function(knex) {
  return knex.schema.createTable('dvd_sessions', table => {
    table.increments()
    table.integer('workout_id').references('workouts.id').onDelete('CASCADE')
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.string("title").notNullable()
    table.dateTime("date").notNullable().defaultTo(knex.fn.now())
    table.integer("calories_burned").defaultTo(0)
    table.integer("average_heart_rate").defaultTo(0)
    table.integer("max_heart_rate").defaultTo(0)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('dvd_sessions')
}
