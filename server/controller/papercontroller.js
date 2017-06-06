const dvd = require('../Models/dvdmodel');
const paper = require('../Models/papermodel')

// Get all Exercises
function getExercises(req, res){
  paper.getExercises().then((exercises)=>{
    res.json(exercises)
  });
}

module.exports = {
  getExercises
}
