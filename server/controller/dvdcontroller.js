const dvd = require('../Models/dvdmodel');
const paper = require('../Models/papermodel')


function getAll(req, res){
  dvd.getAll().then((dworkouts)=>{
    let dvdworkouts = dworkouts
    paper.getAll().then((pworkouts)=>{
      let paperWorkouts = pworkouts
      console.log(dvdworkouts, paperWorkouts);

    })
  });
}

module.exports = {
  getAll
}
