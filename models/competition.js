var mongoose = require('mongoose');

// create a scheme
var competitionSchema = mongoose.Schema({
  name: String,
  country: String,
});

// export model and link scheme with collection
module.exports = mongoose.model('competitions', competitionSchema);
