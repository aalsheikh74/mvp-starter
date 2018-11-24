var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

//mongoose.connect('mongodb://alsheikh813:JHbf*$gfrttgh12@ds035816.mlab.com:35816');
// mongodb://<dbuser>:<dbpassword>@ds035816.mlab.com:35816/mvp-starter

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;