exports.seed = function(knex) {
  return knex('exercise_categories').del()
    .then(() => {
      return knex('exercise_categories').insert([
        {
          id: 1,
          exercise_category_name: 'Lower body',
          muscle_worked: 'Thighs',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          exercise_category_name: 'Lower body',
          muscle_worked: 'Calves',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          exercise_category_name: 'Lower body',
          muscle_worked: 'Glutes',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          exercise_category_name: 'Lower body',
          muscle_worked: 'Overall',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          exercise_category_name: 'Uppper body',
          muscle_worked: 'Triceps',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          exercise_category_name: 'Upper body',
          muscle_worked: 'Back',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          exercise_category_name: 'Upper body',
          muscle_worked: 'Shoulders',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          exercise_category_name: 'Upper Body',
          muscle_worked: 'Biceps',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          exercise_category_name: 'Upper body',
          muscle_worked: 'Overall',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          exercise_category_name: 'Core',
          muscle_worked: 'Overall',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          exercise_category_name: 'Cardio',
          muscle_worked: 'Overall',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          exercise_category_name: 'Total body',
          muscle_worked: 'Overall',
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
