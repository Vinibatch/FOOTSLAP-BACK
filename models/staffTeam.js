var mongoose = require('mongoose');

// create a scheme
var staffTeamSchema = mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'staff' },
  teams: { type: mongoose.Schema.Types.ObjectId, ref: 'teams' },
});

// export model and link scheme with collection
module.exports = mongoose.model('staffTeams', staffTeamSchema);
