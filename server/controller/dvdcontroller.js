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

function createDvdSession(req, res){
  let workout = {
     user_id: req.body.user_id,
     name: 'Our Test Workout',
     workout_id: req.body.workout_id[0].id
  }

  dvd.createDvdSession().insert(workout).returning('*').then((result)=>{
    let id = result[0].id;

    console.log("!!!!!!!!!!!!!!!!!!!!!!" + id);
    res.send(result)
  })
  .catch((err) => {
    next(err)
  })
}

module.exports = {
  getAll, getAllWorkouts, createDvdSession
}
