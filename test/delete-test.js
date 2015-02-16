'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
require('../index.js');

chai.use(chaihttp);

var expect = chai.expect;

describe('patch request', function() {
  it('responds to a patch request', function(done) {
    chai.request('localhost:3000')
      .delete('/dogs/1')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res).to.have.headers;
        done();
      });
  });
});
