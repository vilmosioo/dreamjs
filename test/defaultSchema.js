var chai = require('chai');
var expect = require('chai').expect;
var Dream = require('../dream.js');
var dream = new Dream();

dream.schema('Schema1', {});
dream.schema('Schema2', {});

describe('Dream', function () {
  describe('defaultSchema', function () {
    it('should display the default schema', function () {
      expect(dream.useSchema('UnknownSchema').output()).to.deep.equal({default: ''});
    });
  });
});
