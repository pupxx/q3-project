const knex = require('../../db/connection')

class Dvd {
  constructor(){

  }

  static getAll(){
    return knex('dvd_sessions')
  }
}


module.exports = Dvd
