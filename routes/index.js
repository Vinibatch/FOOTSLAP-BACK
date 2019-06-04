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

router.post('/Login', function (req, res, next) {

  // Connect Fb et Google ou envoie vers signIn
  
  res.json({result: true})
});

router.post('/SignIn', function (req, res, next) {

  // Compare username et password avec la base

  res.json({result: true})
});

router.post('/SignUp', function (req, res, next) {

  // Save nouveau user
  var user = new userModel ({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    dateInsc: req.body.dateInsc,
    dateLastSlap: req.body.dateLastSlap,
    teams: req.body.team_id,
  });

  user.save(
    function(error, user) {
      console.log('saved---->', user);
      res.json({result: true, user});
  });
});

router.post('/Account', function (req, res, next) {

  // Update user (ajout l'équipe)

  res.json({result: true})
});

router.get('/Account', function (req, res, next) {

  // Recup le compteur slap/clap du user et avatar player most slapped

  res.json({result: true})
});

router.get('/actuSlap', function (req, res, next) {

  // Slap global et live par équipe et compétition

  res.json({result: true})
});

// router.post('/actuslapSearch', function (req, res, next) {
//   res.json({result: true})
// });

router.post('/VsEvent', function (req, res, next) {

  // Save or update slap count 

  res.json({result: true})
});

router.post('/VsVote', function (req, res, next) {

  // ???

  res.json({result: true})
});

router.post('/SlapCard', function (req, res, next) {

  // counter global et live (update du staff)

  res.json({result: true})
});

router.post('/team', function (req, res, next) {

  // add and update team
  var team = new teamModel ({
    name: req.body.name,
    logo: req.body.logo,
    live: req.body.live,
  });
  console.log(team);

  team.save(
    function(error, team) {
      console.log('saved---->', team);
      res.json({result: true, team});
  });
});

router.post('/staff', function (req, res, next) {

  // add and update staff
  var staff = new staffModel ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    avatar: req.body.avatar,
    poste: req.body.poste,
    live: req.body.live,
    slapGlobal: req.body.slapGlobal,
    clapGlobal: req.body.clapGlobal,
    slapLive: req.body.slapLive,
    clapLive: req.body.clapLive,
    slapHistory: req.body.slap_id,
  });

  staff.save(
    function(error, staff) {
      console.log('saved---->', staff);
      res.json({result: true, staff});
  });
});

router.post('/Competition', function (req, res, next) {

  // add and update compet

  res.json({result: true})
});

module.exports = router;
