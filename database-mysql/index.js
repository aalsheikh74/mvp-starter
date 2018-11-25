var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'sql9.freemysqlhosting.net',
  user     : 'sql9266860',
  password : 'FykRY4AgCM',
  database : 'sql9266860'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var saveItem = function(data, callback) {
  console.log(data);

  var sqlQ = "INSERT INTO items ( name, type, q) VALUES ( ?, ?, ?)";
  var sqlV = [data.Name, data.Type, data.Quantity]
  connection.query(sqlQ, sqlV, function(err, results, fields) {
    if(err) {
      console.log(err)
      callback(err, null);
    } else {
      console.log("OK", results)
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveItem = saveItem;
// module.exports.selectAll = selectAll;
// module.exports.selectAll = selectAll;
