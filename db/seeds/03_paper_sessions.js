exports.seed = function(knex) {
  return knex('paper_sessions').del()
    .then(() => {
      return knex('paper_sessions').insert([{
		 id: 1,
        paper_session_name: 'Legs and Back',
        date: new Date(),
        calories_burned: 245,
        average_heart_rate: 134,
        max_heart_rate: 156,
        notes: 'Squat - 250lbs.  Can up the weights next workout.',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        paper_session_name: 'Chest and Arms',
        date: new Date(),
        calories_burned: 201,
        average_heart_rate: 127,
        max_heart_rate: 139,
        notes: 'Need to increase my weights on bench press',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        paper_session_name: 'Abs',
        date: new Date(),
        calories_burned: 302,
        average_heart_rate: 122,
        max_heart_rate: 135,
        notes: 'Felt strong today',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        paper_session_name: 'Lower-body frying',
        date: new Date(),
        calories_burned: 165,
        average_heart_rate: 120,
        max_heart_rate: 125,
        notes: 'Good Workout today',
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('paper_sessions_id_seq', (SELECT MAX(id) FROM paper_sessions));"
      );
    });
};
