const knex = require('../../db/connection')

class Dvd {
  constructor(){

  }
// Get All DVD workout sessions
  static getAll(){
    let id = 1
    return knex('dvd_sessions').where('user_id', id).select('name as dvd_session_name', 'calories_burned', 'date')
  }

// get All workout DVD's
  static getAllWorkouts(){
    return knex('workouts')
  }

}


module.exports = Dvd
