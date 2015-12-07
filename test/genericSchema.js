var chai = require('chai');
var expect = require('chai').expect;
var Dream = require('../dream.js');
var dream = new Dream();

describe('Dream', function () {
  describe('genericSchema', function () {
    it('should display an instance of generic schema', function () {
      expect(dream.schema({foo: String}).output()).to.deep.equal({foo: ''});
    });
  });
});
