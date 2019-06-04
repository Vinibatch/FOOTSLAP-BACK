var mongoose = require('mongoose');

// create a scheme
var vsVoteSchema = mongoose.Schema({
  vote: Number,  
  staff: [{ type: mongoose.Schema.Types.ObjectId, ref: 'staff' }],
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'teams' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

// export model and link scheme with collection
module.exports = mongoose.model('vsVote', vsVoteSchema);
