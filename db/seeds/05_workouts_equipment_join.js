exports.seed = function(knex) {
  return knex('workouts_equipment_join').del()
    .then(() => {
      return knex('workouts_equipment_join').insert([{
		 id: 1,
        workout_id: 3,
        equipment_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        workout_id: 2,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        workout_id: 1,
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
