var mongoose = require('mongoose');

// create a scheme
var teamCompetSchema = mongoose.Schema({
  competitions: { type: mongoose.Schema.Types.ObjectId, ref: 'competitions' },
  teams: { type: mongoose.Schema.Types.ObjectId, ref: 'teams' },
});

// export model and link scheme with collection
module.exports = mongoose.model('teamCompets', teamCompetSchema);
