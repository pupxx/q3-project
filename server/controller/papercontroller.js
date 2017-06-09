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
      res.send(result)
    })
  })
}
function editPaperSession(req, res) {

  paper.editPaperSession().update({
    calories_burned: req.body.calories_burned,
    average_heart_rate: req.body.average_heart_rate,
    max_heart_rate: req.body.max_heart_rate,
    notes: req.body.notes
  }).where({ id: req.params.id })
  .returning('*')
  .then((workout) => {
    console.log('this is from editPaperSession', workout);

    res.send(workout)
  })
}

module.exports = {
  getExercises, createPaperSession, editPaperSession
}
