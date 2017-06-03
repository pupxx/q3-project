exports.seed = function(knex) {
  return knex('paper_sessions').del()
    .then(() => {
      return knex('paper_sessions').insert([{
		 id: 1,
        name: 'Legs and Back',
        date: new Date(),
        calories_burned: 245,
        average_heart_rate: 134,
        max_heart_rate: 156,
        user_id: 1
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 1,
        name: 'Chest and Arms',
        date: new Date(),
        calories_burned: 201,
        average_heart_rate: 127,
        max_heart_rate: 139,
        user_id: 1
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 1,
        name: 'Abs',
        date: new Date(),
        calories_burned: 302,
        average_heart_rate: 122,
        max_heart_rate: 135,
        user_id: 2
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
