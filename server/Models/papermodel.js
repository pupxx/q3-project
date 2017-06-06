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

}


module.exports = Paper
