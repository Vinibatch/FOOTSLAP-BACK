var mongoose = require('mongoose');

// create a scheme
var teamSchema = mongoose.Schema({
  name: String,
  logo: Buffer,
  live: Boolean,
});

// export model and link scheme with collection
module.exports = mongoose.model('teams', teamSchema);
