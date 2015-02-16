'use strict';

var fs = require('fs');

module.exports = function(req, res, filename) {
  var input = '';

  req.on('data', function(data) {
    input += data.toString('utf-8');
  });

  req.on('end', function() {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    fs.writeFile('./data/notes' + filename + '.JSON', input, function(err) {
      console.log('file written');
    });

    res.end(JSON.stringify({msg: 'putted'}));
  });
}
