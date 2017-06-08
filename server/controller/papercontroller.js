const dvd = require('../Models/dvdmodel');
const paper = require('../Models/papermodel')

// Get all Exercises
function getExercises(req, res){
  paper.getExercises().then((exercises)=>{
    res.json(exercises)
  });
}

function createPaperSession(req, res) {
  let newPaperExercises = req.body.selectedExercises
  let paperWorkout = {
    paper_session_name: 'Great Glutes',
    user_id: req.body.user_id
  }

  paper.createPaperSession().insert(paperWorkout).returning('*')
  .then((result) => {
    singleWorkout = result
    let joinTableArr = []
    newPaperExercises.forEach((el) => {
      // console.log(el);
      let exercises = {
        paper_session_id: singleWorkout[0].id,
        exercise_id: el.id
      }
      joinTableArr.push(exercises)
    })
    paper.postExercisePaperJoin().insert(joinTableArr).then(() => {
      let result = singleWorkout[0]
      console.log(singleWorkout[0])
      res.send(result)
    })
  })
}

module.exports = {
  getExercises, createPaperSession
}
