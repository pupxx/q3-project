exports.up = function(knex) {
  return knex.schema.createTable('paper_sessions', table => {
    table.increments()
    table.string("paper_session_name").notNullable()
    table.dateTime("date").notNullable().defaultTo(knex.fn.now())
    table.integer("calories_burned").defaultTo(0)
    table.integer("average_heart_rate").defaultTo(0)
    table.integer("max_heart_rate").defaultTo(0)
    table.text("notes").defaultTo('')
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.timestamps(true, true);
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('paper_sessions')
}
