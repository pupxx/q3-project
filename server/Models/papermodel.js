const knex = require('../../db/connection')

class Paper {
  constructor(){

  }

  static getAll(){
    let id = 1
    return knex('paper_sessions').where('user_id' , id).select('paper_session_name', 'calories_burned', 'date')
  }
}


module.exports = Paper
