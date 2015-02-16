'use strict';

var fs = require('fs');

module.exports = function(req, res, filename) {
  fs.unlink('./data/notes' + filename + '.JSON', function(exception){
      console.log('DELETED');
    });
    res.end();
}
