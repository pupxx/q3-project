exports.seed = function(knex) {
  return knex('instructors').del()
    .then(() => {
      return knex('instructors').insert([{
		 id: 1,
        first_name: 'Cathe',
        last_name: 'Friedrich',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 2,
        first_name: 'Tony',
        last_name: 'Horton',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 3,
        first_name: 'Shaun',
        last_name: 'T',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 4,
        first_name: 'Mike',
        last_name: 'Dovanavik',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 5,
        first_name: 'Bernadette',
        last_name: 'Giorgi',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 6,
        first_name: 'Michelle',
        last_name: 'Dozois',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 7,
        first_name: 'Amy',
        last_name: 'Dixon',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 8,
        first_name: 'Paul',
        last_name: 'Katami',
        created_at: new Date(),
        updated_at: new Date()
      },{
		 id: 9,
        first_name: 'Sandra',
        last_name: 'Koulourides',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('instructors_id_seq', (SELECT MAX(id) FROM instructors));"
      );
    });
};
