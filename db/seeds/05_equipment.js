exports.seed = function(knex) {
  return knex('equipment').del()
    .then(() => {
      return knex('equipment').insert([{
		 id: 1,
        equipment_type: 'Dumbbells',
      },{
		 id: 2,
        equipment_type: 'Kettlebell',
      },{
		 id: 3,
        equipment_type: 'Pull-up Bar',
      },{
		 id: 4,
        equipment_type: 'Stability Ball',
      },{
		 id: 5,
        equipment_type: 'Yoga Mat',
      },{
		 id: 6,
        equipment_type: 'Medicine Ball',
      },{
		 id: 7,
        equipment_type: 'None',
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('equipment_id_seq', (SELECT MAX(id) FROM equipment));"
      );
    });
};
