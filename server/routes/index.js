var express = require('express');
var router = express.Router();
const dvd = require('../controller/dvdcontroller')
const paper = require('../controller/papercontroller')

/* GET home page. */
router.get('/landing', dvd.getAll)
router.get('/dvd', dvd.getAllWorkouts)
router.get('/build-from-exercises', paper.getExercises)
router.post('/dvd-session', dvd.createDvdSession)
router.post('/paper-session', paper.createPaperSession)

module.exports = router;
