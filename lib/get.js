'use strict';

var fs = require('fs-extra');

module.exports = function(req, res, filename) {
  res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    fs.readJson('./data/notes' + filename + '.JSON', function(err, data){
      res.write(JSON.stringify(data));
      res.end();
    });
}
