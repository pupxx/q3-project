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
    // console.log(' im results', result);
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
      let id = singleWorkout[0].id
      console.log(id);

      return paper.getPaperWorkoutAndExercises()
      .where('paper_sessions_exercises_join.paper_session_id', id)

    }).then((all)=>{
          console.log('here',all);
          res.send(all)
    })
  })
}

function editPaperSession(req, res) {
  console.log(req.params);
  console.log(req.body);
  paper.editPaperSession().update({
    calories_burned: req.body.calories_burned,
    average_heart_rate: req.body.average_heart_rate,
    max_heart_rate: req.body.max_heart_rate,
    notes: req.body.notes
  }).where({ id: req.params.id })
  .returning('*')
  .then((workout) => {
    console.log(workout);
    res.send(workout)

  })
}

module.exports = {
  getExercises, createPaperSession, editPaperSession
}
