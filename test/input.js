var chai = require('chai');
var expect = require('chai').expect;
var Dream = require('../dream.js');
var dream = new Dream();

dream.customType('inputTest', function (helper) {
  return helper.input.test;
});

dream.schema('SchemaUsingInput', {result: 'inputTest'});

dream.input({
  test: 'ok'
});

describe('Dream', function () {
  describe('inputs', function () {
    it('should use input data within a custom type', function () {
      expect(dream.useSchema('SchemaUsingInput').generateRnd().output().result).to.equal('ok');
    });
  });
});
