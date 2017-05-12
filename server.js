const express = require('express')
const compress = require('compression')
const path = require('path')
const fs = require('fs')
console.log('test')
const app = express()

// Apply gzip compression
app.use(compress())


app.use(express.static('./dist'))

// Define the port to run on
app.set('port', process.env.PORT);

app.use('*', function (req, res, next) {
  const filename = path.join('./dist', 'index.html')
  fs.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
