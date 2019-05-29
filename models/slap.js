var mongoose = require('mongoose');

// create a scheme
var slapSchema = mongoose.Schema({
  state: String,
  date: Date,
  competition: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'staff' },
});

// export model and link scheme with collection
module.exports = mongoose.model('slaps', slapSchema);
