const dvd = require('../Models/dvdmodel');
const paper = require('../Models/papermodel')


function getAll (req, res){
  dvd.getAll().then((dworkouts)=>{
    let dvdworkouts = dworkouts
    paper.getAll().then((pworkouts)=>{
      let paperWorkouts = pworkouts
      console.log(dvdworkouts, paperWorkouts);
      // let result = [dvdworkouts, paperWorkouts]
      // let result = { dvd_workouts: dvdworkouts, paper_workouts: paperWorkouts }
      // let result = dvdworkouts.concat(paperWorkouts)
      res.json(result)
    })
  });
}

module.exports = {
  getAll
}
