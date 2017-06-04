exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
		 id: 1,
        username: 'Big Ben',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        username: 'Muscle Madness',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        username: 'Turtle Man',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
