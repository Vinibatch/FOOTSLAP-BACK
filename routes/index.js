var express = require('express');
var router = express.Router();
var competitionModel = require('../models/competition');
var slapModel = require('../models/slap');
var staffModel = require('../models/staff');
var staffTeamModel = require('../models/staffTeam');
var teamModel = require('../models/team');
var teamCompetModel = require('../models/teamCompet');
var userModel = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
