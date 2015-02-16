'use strict';

var fs = require('fs');

module.exports = function(req, res) {

  var fileCount = fs.readdirSync('./data').length;
  var input = '';

  req.on('data', function(data) {
    input += data.toString('utf-8');
  });

  req.on('end', function() {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    fs.writeFile('./data/notes' + (fileCount + 1) + '.JSON', input, function(err) {
      console.log('file written');
    });

    res.end('posted');
  });
}
