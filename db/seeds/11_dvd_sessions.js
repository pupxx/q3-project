exports.seed = function(knex) {
  return knex('dvd_sessions').del()
    .then(() => {
      return knex('dvd_sessions').insert([{
		 id: 1,
        name: 'Monday Cardio Workout',
        date: '2017-05-03T10:24:35-07:00',
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
        date: '2017-05-28T10:24:35-07:00',
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
        date: '2017-06-01T10:24:35-07:00',
        calories_burned: 302,
        average_heart_rate: 122,
        max_heart_rate: 135,
        notes: 'Felt a bit sluggish today.  Make sure to have enough calories in before working out.',
        user_id: 2,
        workout_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        name: 'Oww my legs!',
        date: '2017-06-03T10:24:35-07:00',
        calories_burned: 186,
        average_heart_rate: 118,
        max_heart_rate: 130,
        notes: 'Never again.',
        user_id: 2,
        workout_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        name: 'Super cardio blast',
        date: '2017-06-04T10:24:35-07:00',
        calories_burned: 441,
        average_heart_rate: 142,
        max_heart_rate: 171,
        notes: 'Definitely want to do this one again! Remember to get step out first though.',
        user_id: 2,
        workout_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        name: 'Stuff',
        date: '2017-06-06T10:24:35-07:00',
        calories_burned: 305,
        average_heart_rate: 133,
        max_heart_rate: 149,
        notes: 'Wish the music were better.',
        user_id: 2,
        workout_id: 3,
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
