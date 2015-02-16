# Restful-framework

This restful framework has two methods. First, a user can create a server using .makeServer on the exported app module. Second, a user can add a route using .addRoute on the exported app module.

The .makeServer method can be executed using the following code.

var app = require('./app.js');

app.makeServer(3000, function(){
  console.log('server made');
});

The .addRoute method can be executed using the following code.

var app = require('./app.js');

app.addRoute('dogs', function(){
  console.log('route added');
});

This framework responds and executes proper get, post, patch, put, and delete requests from the client. Using these requests will store/access files in a data folder in the root of the application.
