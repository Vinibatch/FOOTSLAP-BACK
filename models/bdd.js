var mongoose = require('mongoose');

var user = 'MaxFootSlap';
var password = 'slapfoot';
var bddname = 'FootSlap';

// set timeout with datdabase
var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

// connect mongodb using mongoose
mongoose.connect('mongodb+srv://' + user + ':' + password + '@cluster0-ee6sp.mongodb.net/' + bddname + '?retryWrites=true',
    options,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.log('connection ok');
     }
  }
);
