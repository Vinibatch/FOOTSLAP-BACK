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

router.get('/redux', function (req, res, next) {

  // Recup les équipes du player avec son staff et les compteurs associés aux staff et au user
  userModel.findById('5cf65957c04dbd0a6ebb10c8')
    .populate('teams')
    .exec(function (err, user) {
      console.log('user----->', user);
      // res.json({result: true, user})
    })
    // staffTeamModel.find('5cf638f9fd560d0471d11776')
    //   .populate('staff')
    //   .exec(function(err, staff) {
    //     console.log('staff----->', staff);
    //     res.json({result: true, staff})
    //   })
});

router.get('login', function (req, res, next) {

  // Connect Fb et Google ou envoie vers signIn
  
});

router.post('/sign-in', function (req, res, next) {

  // Compare username et password avec la base

  res.json({result: true})
});

router.post('/sign-up', function (req, res, next) {

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

router.post('/team-compet', function (req, res, next) {

  // add and update staff
  var teamCompet = new teamCompetModel ({
    competitions: req.body.competition_id,
    teams: req.body.team_id,
  });

  teamCompet.save(
    function(error, teamCompet) {
      console.log('saved---->', teamCompet);
      res.json({result: true, teamCompet});
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

router.post('/staff-team', function (req, res, next) {

  // add and update staff
  var staffTeam = new staffTeamModel ({
    staff: req.body.staff_id,
    teams: req.body.team_id,
  });

  staffTeam.save(
    function(error, staffTeam) {
      console.log('saved---->', staffTeam);
      res.json({result: true, staffTeam});
  });
});

router.post('/competition', function (req, res, next) {

  // add and update compet
  var competition = new competitionModel ({
    name: req.body.name,
    country: req.body.country,
  });

  competition.save(
    function(error, competition) {
      console.log('saved---->', competition);
      res.json({result: true, competition});
  });
});

module.exports = router;
