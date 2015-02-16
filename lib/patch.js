'use strict';

var fs = require('fs-extra');

module.exports = function(req, res, filename) {

  var path = './data/notes' + filename + '.JSON';
  var file = '';

  function readDataFromReq(req, callback) {
    var input = '';
    req.on('data', function(data) {
         input += data.toString('utf-8');
    });
    req.on('end', function() {
     callback(input);
    });
  }

  fs.open(path, 'r+', function(err){
    if (err) {
      res.writeHead(404);
    } else {
      readDataFromReq(req, function(input) {
      input = JSON.parse(input);
      fs.readFile(path, function(err, data) {
        if(err) {
          res.writeHead(404);
        } else {
            file = data.toString('utf8');
            file = JSON.parse(file);
            for (var key in input) {
              file[key] = input[key];
            }
            file = JSON.stringify(file);
            fs.writeFile(path, file, function(err) {
              res.writeHead(err ? 404 : 200);
            });
          }
        res.end();
      });
    });
    }
    res.end();
  });
};
