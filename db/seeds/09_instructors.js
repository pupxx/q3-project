exports.seed = function(knex) {
  return knex('instructors').del()
  .then(() => {
    return knex('instructors').insert([
      {
        id: 1,
        first_name: 'Cathe',
        last_name: 'Friedrich',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        first_name: 'Tony',
        last_name: 'Horton',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        first_name: 'Shaun',
        last_name: 'T',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        first_name: 'Billy',
        last_name: 'Blanks',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        first_name: 'Debbie',
        last_name: 'Siebers',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('instructors_id_seq', (SELECT MAX(id) FROM instructors));"
    );
  });
};
