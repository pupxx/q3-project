const dvd = require('../Models/dvdmodel')
const paper = require('../Models/papermodel')
const paper = require('../Models/instructormodel')

// ===== GET ALL INSTRUCTORS =====
function getInstructors(req, res){
  instructor.getAllInstructors().then((instructors)=>{
    res.json(instructors)
  });
}

module.exports = {
  getInstructors
}
