exports.seed = function(knex) {
  return knex('equipment').del()
    .then(() => {
      return knex('equipment').insert([{
		 id: 1,
        name: 'Dumbbells',
      },{
		 id: 2,
        name: 'Kettlebell',
      },{
		 id: 3,
        name: 'Pull-up Bar',
      },{
		 id: 4,
        name: 'Stability Ball',
      },{
		 id: 5,
        name: 'Yoga Mat',
      },{
		 id: 6,
        name: 'Medicine Ball',
      },{
		 id: 7,
        name: 'None',
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('equipment_id_seq', (SELECT MAX(id) FROM equipment));"
      );
    });
};
