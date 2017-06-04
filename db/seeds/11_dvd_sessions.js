exports.seed = function(knex) {
  return knex('dvd_sessions').del()
    .then(() => {
      return knex('dvd_sessions').insert([{
		 id: 1,
        name: 'Insanity',
        date: new Date(),
        calories_burned: 245,
        average_heart_rate: 134,
        max_heart_rate: 156,
        notes: 'Ran out of steam on the first set.',
        user_id: 1,
        workout_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        name: 'P90X',
        date: new Date(),
        calories_burned: 201,
        average_heart_rate: 127,
        max_heart_rate: 139,
        notes: 'Felt very strong today',
        user_id: 1,
        workout_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        name: 'Rock out Knockout DVD Workout',
        date: new Date(),
        calories_burned: 302,
        average_heart_rate: 122,
        max_heart_rate: 135,
        notes: 'Used 10lb medicine ball for ab twists - can use 15lbs next time.',
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
