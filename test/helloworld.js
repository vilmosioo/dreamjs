var chai = require('chai');
var expect = require('chai').expect;
var Dream = require('../dream.js');
var dream = new Dream();

describe('Dream', function () {
  describe('default output', function () {
    it('should display Hello World output', function () {
      expect(dream.output()).to.deep.equal({Dream: 'Hello World'});
    });
  });
});
