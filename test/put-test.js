'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
require('../index.js');

chai.use(chaihttp);

var expect = chai.expect;

describe('put request', function() {
  it('responds to a put request', function(done) {
    chai.request('localhost:3000')
      .put('/dogs/1')
      .send({hello: 'world'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res).to.have.headers;
        done();
      });
  });
});
