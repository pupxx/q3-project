const knex = require('../../db/connection')

class Dvd {
  constructor(){

  }

  static getAll(){
    let id = 1
    
    return knex('dvd_sessions').where('user_id', id).select('name as dvd_session_name', 'calories_burned', 'date')
  }
}


module.exports = Dvd
