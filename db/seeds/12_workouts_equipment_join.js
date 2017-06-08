exports.seed = function(knex) {
  return knex('workouts_equipment_join').del()
    .then(() => {
      return knex('workouts_equipment_join').insert([{
		 id: 1,
        workout_id: 3,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        workout_id: 2,
        equipment_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        workout_id: 1,
        equipment_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        workout_id: 4,
        equipment_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        workout_id: 5,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        workout_id: 5,
        equipment_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 7,
        workout_id: 5,
        equipment_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 8,
        workout_id: 6,
        equipment_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 9,
        workout_id: 7,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 10,
        workout_id: 7,
        equipment_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 11,
        workout_id: 8,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 12,
        workout_id: 8,
        equipment_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 13,
        workout_id: 10,
        equipment_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 14,
        workout_id: 11,
        equipment_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 15,
        workout_id: 11,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 16,
        workout_id: 12,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 17,
        workout_id: 13,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 18,
        workout_id: 13,
        equipment_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 19,
        workout_id: 14,
        equipment_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 20,
        workout_id: 15,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 21,
        workout_id: 15,
        equipment_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 22,
        workout_id: 16,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 23,
        workout_id: 17,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 24,
        workout_id: 17,
        equipment_id: 9,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 25,
        workout_id: 18,
        equipment_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('workouts_equipment_join_id_seq', (SELECT MAX(id) FROM workouts_equipment_join));"
      );
    });
};
