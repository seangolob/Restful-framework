'use strict';

var http = require('http'),
    routes = require('./lib/router.js'),
    router = [],
    App = function(){};




var server = http.createServer(function(req, res){
  var url = req.url;
  var urlRoute = url.split('/')[1];
  console.log(urlRoute);
  console.log(router.indexOf(urlRoute));
  if (urlRoute.length > 1) {
    var filename = url.split('/')[2];
    console.log(filename);
  }

  if (router.indexOf(urlRoute) !== -1) {
    routes[req.method](req, res, filename);
  } else {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.write(JSON.stringify({msg: 'page not found'}));
    res.end();
  }

});

App.prototype.makeServer = function(port, callback) {
  server.listen(port, callback);
}

App.prototype.addRoute = function(route, callback) {
  router.push(route);
  callback();
}

module.exports = new App();
