exports.seed = function(knex) {
  return knex('workout_categories').del()
    .then(() => {
      return knex('workout_categories').insert([{
		 id: 1,
        name: 'Cardio',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        name: 'Weights',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        name: 'Full Body Circuit',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        name: 'Yoga',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        name: 'Legs and Back',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        name: 'Chest and Arms',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 7,
        name: 'Core',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 8,
        name: 'Lower Body Circuit',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 9,
        name: 'Upper Body Circuit',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 10,
        name: 'Pilates',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('workout_categories_id_seq', (SELECT MAX(id) FROM workout_categories));"
      );
    });
};
