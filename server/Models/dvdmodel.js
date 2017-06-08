const knex = require('../../db/connection')

class Dvd {
  constructor(){

  }
// Get All DVD workout sessions
  static getAll(){
    let id = 1
    return knex('dvd_sessions').where('user_id', id).select('id', 'name as dvd_session_name', 'calories_burned', 'date')
  }

// get All workout DVD's
  static getAllWorkouts(){
    return knex('workouts')
  }

  // POST dvd created workout
  static createDvdSession(){
    return knex('dvd_sessions')
    console.log('this is in the model');
  }

}


module.exports = Dvd
