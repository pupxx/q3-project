const knex = require('../../db/connection')

class Paper {
  constructor(){

  }

  static getAll(){
    let id = 1
    return knex('*').from('paper_sessions').where('user_id' , id)
  }
}


module.exports = Paper
