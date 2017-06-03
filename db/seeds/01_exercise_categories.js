exports.seed = function(knex) {
  return knex('exercise_categories').del()
    .then(() => {
      return knex('exercise_categories').insert([
        {
          id: 1,
          name: 'Lower body',
          muscle_worked: 'Thighs'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: 'Lower body',
          muscle_worked: 'Calves'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: 'Lower body',
          muscle_worked: 'Glutes'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          name: 'Lower body',
          muscle_worked: 'Overall'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          name: 'Uppper body',
          muscle_worked: 'Triceps'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          name: 'Upper body',
          muscle_worked: 'Back'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          name: 'Upper body',
          muscle_worked: 'Shoulders'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          name: 'Upper Body',
          muscle_worked: 'Biceps'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          name: 'Upper body',
          muscle_worked: 'Overall'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          name: 'Core',
          muscle_worked: 'Overall'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          name: 'Cardio',
          muscle_worked: 'Overall'
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          name: 'Total body',
          muscle_worked: 'Overall'
          created_at: new Date(),
          updated_at: new Date()
        }

    ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('exercise_categories_id_seq', (SELECT MAX(id) FROM exercise_categories));"
      );
    });
};
