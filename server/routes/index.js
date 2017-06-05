var express = require('express');
var router = express.Router();
const ctrl = require('../controller/dvdcontroller')

/* GET home page. */
router.get('/', ctrl.getAll)

module.exports = router;
