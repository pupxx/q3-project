exports.seed = function(knex) {
  return knex('workout_categories').del()
    .then(() => {
      return knex('workout_categories').insert([
      {
        id: 1,
        type: 'Kickboxing'
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        type: 'Total Body'
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        type: 'Yoga'
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        type: 'Pilates'
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
