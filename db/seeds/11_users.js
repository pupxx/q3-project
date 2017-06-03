exports.seed = function(knex) {
  return knex('users').del()
  .then(() => {
    return knex('users').insert([
      {
        id: 1,
        username: 'benjaminJames',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        username: 'buffManOne',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        username: 'coolLadyMuscles',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        username: 'bigBoyWow',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
    );
  });
};
