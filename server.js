const express = require('express')
const compress = require('compression')
console.log('test')
const app = express()

// Apply gzip compression
app.use(compress())


app.use(express.static('./dist'))

// Define the port to run on
app.set('port', 8080);

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
