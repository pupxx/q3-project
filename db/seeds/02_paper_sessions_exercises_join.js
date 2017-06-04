
exports.seed = function(knex) {
  return knex('paper_sessions_categories_join').del()
    .then(() => {
      return knex('paper_sessions_categories_join').insert([
        {
          id: 1,
          paper_session_id: 1,
          exercise_id: 10,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          paper_session_id: 1,
          exercise_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          paper_session_id: 1,
          exercise_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          paper_session_id: 1,
          exercise_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          paper_session_id: 1,
          exercise_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          paper_session_id: 1,
          exercise_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          paper_session_id: 2,
          exercise_id: 10,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          paper_session_id: 2,
          exercise_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          paper_session_id: 2,
          exercise_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          paper_session_id: 2,
          exercise_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          paper_session_id: 3,
          exercise_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          paper_session_id: 3,
          exercise_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 13,
          paper_session_id: 3,
          exercise_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 14,
          paper_session_id: 3,
          exercise_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 15,
          paper_session_id: 3,
          exercise_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 16,
          paper_session_id: 2,
          exercise_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 17,
          paper_session_id: 2,
          exercise_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 18,
          paper_session_id: 1,
          exercise_id: 10,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 19,
          paper_session_id: 1,
          exercise_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 20,
          paper_session_id: 3,
          exercise_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('paper_sessions_categories_join_id_seq', (SELECT MAX(id) FROM paper_sessions_categories_join));"
      );
    });
};
