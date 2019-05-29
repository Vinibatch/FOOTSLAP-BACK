var mongoose = require('mongoose');

// create a scheme
var userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  dateInsc: Date,
  dateLastSlap: Date,
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'teams' }],
});

// export model and link scheme with collection
module.exports = mongoose.model('users', userSchema);
