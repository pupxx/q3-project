exports.seed = function (knex) {
  return knex('exercise_categories').del()
  .then(() => {
    return knex('paper_sessions_exercises_join').del()
  }).then(() => {
    return knex('exercises').del()
  }).then(() => {
    return knex('paper_sessions').del()
  }).then(() => {
    return knex('workouts_equipment_join').del()
  }).then(() => {
    return knex('workouts').del()
  }).then(() => {
    return knex('equipment').del()
  }).then(() => {
    return knex('workout_categories').del()
  }).then(() => {
    return knex('instructors').del()
  }).then(() => {
    return knex('dvd_sessions').del()
  }).then(() => {
    return knex('users').del()
  })
}
