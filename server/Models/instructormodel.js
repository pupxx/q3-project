const knex = require('../../db/connection')

class Instructor {
  constructor(){

  }

  // ===== GET ALL INSTRUCTORS =====
  static getAllInstructors(){
    return knex('instructors')
  }

module.exports = Instructor
