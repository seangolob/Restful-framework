'use strict';

var app = require('./app.js');

app.makeServer(3000, function(){
  console.log('server made');
});

app.addRoute('dogs', function(){
  console.log('route added');
});
