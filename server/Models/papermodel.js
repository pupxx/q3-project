const knex = require('../../db/connection')

class Paper {
  constructor(){

  }

  static getAll(){
    return knex('paper_sessions')
  }
}


module.exports = Paper
