exports.seed = function(knex) {
  return knex('dvd_sessions').del()
    .then(() => {
      return knex('dvd_sessions').insert([{
		 id: 1,
        name: 'Monday Cardio Workout',
        date: new Date(),
        calories_burned: 245,
        average_heart_rate: 134,
        max_heart_rate: 156,
        notes: 'Ran out of steam on the first round.',
        user_id: 1,
        workout_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        name: 'P90X - Legs and Back',
        date: new Date(),
        calories_burned: 201,
        average_heart_rate: 127,
        max_heart_rate: 139,
        notes: 'Felt very strong today.  Increased max pullups to 15.',
        user_id: 1,
        workout_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        name: 'Wednesday Morning Workout',
        date: new Date(),
        calories_burned: 302,
        average_heart_rate: 122,
        max_heart_rate: 135,
        notes: 'Felt a bit sluggish today.  Make sure to have enough calories in before working out.',
        user_id: 2,
        workout_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('dvd_sessions_id_seq', (SELECT MAX(id) FROM dvd_sessions));"
      );
    });
};
