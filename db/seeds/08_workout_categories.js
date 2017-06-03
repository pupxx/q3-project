exports.seed = function(knex) {
  return knex('workout_categories').del()
    .then(() => {
      return knex('workout_categories').insert([
      {
        id: 1,
        name: 'Kickboxing'
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        name: 'Total Body'
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        name: 'Yoga'
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        name: 'Pilates'
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('workout_categories_id_seq', (SELECT MAX(id) FROM workout_categories));"
      );
    });
};
