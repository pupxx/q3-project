const dvd = require('../Models/dvdmodel');
const paper = require('../Models/papermodel')


function getAll (req, res){
  dvd.getAll().then((dworkouts)=>{
    let dvdworkouts = dworkouts
    paper.getAll().then((pworkouts)=>{
      let paperWorkouts = pworkouts
      // let result = [dvdworkouts, paperWorkouts]
      // let result = { dvd_workouts: dvdworkouts, paper_workouts: paperWorkouts }
      let result = dvdworkouts.concat(paperWorkouts)
      res.json(result)
    })
  });
}

// Get all DVD workouts
function getAllWorkouts(req, res){
  dvd.getAllWorkouts().then((dvdworkouts)=>{
    res.json(dvdworkouts);
  })
}

module.exports = {
  getAll, getAllWorkouts
}
