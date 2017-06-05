const knex = require('../../db/connection')

class Dvd {
  constructor(){

  }

  static getAll(){
    let id = 1
    return knex('*').from('dvd_sessions').where('user_id', id)
  }
}


module.exports = Dvd
