var express = require('express');
var router = express.Router();
const dvd = require('../controller/dvdcontroller')
const paper = require('../controller/papercontroller')

/* GET home page. */
router.get('/landing', dvd.getAll)
router.get('/dvd', dvd.getAllWorkouts)
router.get('/build-from-exercises', paper.getExercises)


module.exports = router;
