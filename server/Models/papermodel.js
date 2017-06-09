const knex = require('../../db/connection')

class Paper {
  constructor(){

  }

// Get all Paper Sessions
  static getAll(){
    let id = 1
    return knex('paper_sessions').where('user_id' , id).select('paper_session_name', 'calories_burned', 'date')
  }

  // Get all Exercises
  static getExercises(){
    return knex('exercises')
  }

  static createPaperSession () {
    return knex('paper_sessions')
  }

  static postExercisePaperJoin () {
    return knex('paper_sessions_exercises_join')
  }

  static editPaperSession () {
    return knex('paper_sessions')
  }

  static getPaperWorkoutAndExercises (){
    return knex('paper_sessions')
    .innerJoin('paper_sessions_exercises_join', 'paper_sessions.id', 'paper_sessions_exercises_join.paper_session_id')
    .innerJoin('exercises', 'paper_sessions_exercises_join.exercise_id', 'exercises.id')
  }

}


module.exports = Paper
