exports.seed = function(knex) {
  return knex('exercises').del()
    .then(() => {
      return knex('exercises').insert([
        {
          id: 1,
          name: 'Narrow-stance squats',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: 'Forward lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: 'Reverse lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: 'Plyo jacks',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          name: 'Kickbacks',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          name: 'Reverse crunches',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          name: 'One-arm rows',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          name: 'Bench press',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          name: 'Divebomber push-ups',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          name: 'Lateral raises',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        }
    ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('exercises_id_seq', (SELECT MAX(id) FROM exercises));"
      );
    });
};
