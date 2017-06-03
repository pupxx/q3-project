exports.seed = function(knex) {
  return knex('dvd_sessions').del()
  .then(() => {
    return knex('dvd_sessions').insert([
      {
        id: 1,
        workout_id: 1,
        user_id: 1,
        title: 'Max Leg Workout',
        date: new Date(),
        calories_burned: 300,
        average_heart_rate: 130,
        max_heart_rate: 160,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        workout_id: 2,
        user_id: 2,
        title: 'Great Arms',
        date: new Date(),
        calories_burned: 200,
        average_heart_rate: 115,
        max_heart_rate: 165,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        workout_id: 3,
        user_id: 3,
        title: 'Super Abs',
        date: new Date(),
        calories_burned: 275,
        average_heart_rate: 120,
        max_heart_rate: 155,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        workout_id: 3,
        user_id: 4,
        title: 'Hot Buns',
        date: new Date(),
        calories_burned: 300,
        average_heart_rate: 128,
        max_heart_rate: 170,
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('dvd_sessions_id_seq', (SELECT MAX(id) FROM dvd_sessions));"
    );
  });
};
