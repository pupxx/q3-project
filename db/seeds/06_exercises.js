exports.seed = function(knex) {
  return knex('exercises').del()
    .then(() => {
      return knex('exercises').insert([
        {
          id: 1,
          exercise_name: 'Narrow-stance squats',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          exercise_name: 'Forward lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          exercise_name: 'Reverse lunges',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          exercise_name: 'Plyo jacks',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          exercise_name: 'Kickbacks',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          exercise_name: 'Reverse crunches',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          exercise_name: 'One-arm rows',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          exercise_name: 'Bench press',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          exercise_name: 'Divebomber push-ups',
          demo_url: 'https://www.youtube.com/watch?v=mvNcSF-nXg4',
          equipment_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          exercise_name: 'Lateral raises',
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
