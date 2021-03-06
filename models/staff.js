var mongoose = require('mongoose');

// create a scheme
var staffSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  poste: String,
  live: Boolean,
  slapGlobal: Number,
  clapGlobal: Number,
  slapLive: Number,
  clapLive: Number,
  slapHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'slaps' }],
});

// export model and link scheme with collection
module.exports = mongoose.model('staff', staffSchema);
