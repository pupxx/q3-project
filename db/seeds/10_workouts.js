exports.seed = function(knex) {
  return knex('workouts').del()
    .then(() => {
      return knex('workouts').insert([{
		 id: 1,
        title: 'Insanity',
        instructor_id: 3,
        workout_category_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        title: 'Rockout Knockout',
        instructor_id: 1,
        workout_category_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        title: 'P90X',
        instructor_id: 3,
        workout_category_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('workouts_id_seq', (SELECT MAX(id) FROM workouts));"
      );
    });
};
