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

router.post('/live-counter', function (req, res, next) {

  var action = req.body.action == 'slap' ? {$inc: {slapLive: +1}} : {$inc: {clapLive: +1}}

  staffModel.updateOne(
    {_id: req.body.playerId},
    action,
    function (err, staff) {
       
      console.log('staff----->', staff);
      
      res.json({result: true, staff})
    });
});

router.post('/global-counter', function (req, res, next) {

  var action = req.body.action == 'slap' ? {$inc: {slapLive: +1}} : {$inc: {clapLive: +1}}

  staffModel.updateOne(
    {_id: req.body.playerId},
    {$inc: {slapGlobal: +1, clapGlobal: +1}},
    function (err, staff) {
       
      console.log('staff----->', staff);
      
      res.json({result: true, staff})
    });
});

  // Recup les équipes du player avec son staff et les compteurs associés aux staff et au user
router.get('/redux', function (req, res, next) {

  userModel.findById('5cf65957c04dbd0a6ebb10c8')
    .populate('teams')
    .exec(function (err, user) {
      // console.log('user----->', user);

      user.teams.map((teams, i) =>{

        // console.log('teams', teams._id)

        staffTeamModel.findOne({teams: teams._id})
          .populate('staff')
          .populate('teams')
          .exec(function (err, staff) {
            console.log('staffTeamModel----->', staff);
          });
      })

      res.json({result: true})

    })
});



  // Connect Fb et Google ou envoie vers signIn
router.get('login', function (req, res, next) {
  res.json({result: true})
});

  // Compare username et password avec la base
router.post('/sign-in', function (req, res, next) {
  res.json({result: true})
});

  // Save new user
router.post('/sign-up', function (req, res, next) {

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

  // Update user (ajout de l'équipe)
router.post('/account', function (req, res, next) {

  userModel.findById('5cf65957c04dbd0a6ebb10c8',
    function (err, user) {
      console.log('user----->', user);

      user.teams.push(req.body.teams_id);

      user.save(
        function (error, user) {
          console.log('saved---->', user.teams);
          res.json({result: true})
        });
    });
});

  // Recup le compteur slap/clap du user et avatar player most slapped
router.get('/account', function (req, res, next) {

  competitionModel.find()
  .populate('teams')
  .exec(function (err, compets) {
    // console.log('user----->', user);

    compets.map((competitions, i) =>{

      console.log('teams', competitions._id, competitions.name)

      teamCompetModel.find({competitions: competitions._id})
        .populate('competitions')
        .populate('teams')
        .exec(function (err, teams) {
          console.log('teamCompetModel----->', teams);
        });
    })

    res.json({result: true})

  })
});



// Slap global et live par équipe et compétition
router.get('/actuSlap', function (req, res, next) {
  res.json({result: true})
});

// router.post('/actuslapSearch', function (req, res, next) {
//   res.json({result: true})
// });

  // Save or update slap count
router.post('/vs-event', function (req, res, next) {
  res.json({result: true})
});

router.post('/vs-vote', function (req, res, next) {

  // ???

  res.json({result: true})
});

  // counter global et live (update du staff)
router.post('/slap-card', function (req, res, next) {
  res.json({result: true})
});

  // add team
router.post('/team', function (req, res, next) {

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

  // adssociate team to a competition
router.post('/team-compet', function (req, res, next) {

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

  // add staff
router.post('/staff', function (req, res, next) {

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

  // associate staff to a team
router.post('/staff-team', function (req, res, next) {

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

  // add competition
router.post('/competition', function (req, res, next) {

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
