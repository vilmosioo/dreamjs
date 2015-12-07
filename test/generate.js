var chai = require('chai');
var expect = require('chai').expect;
var Dream = require('../dream.js');
var dream = new Dream();

dream.schema('NamedSchema', {name: String});

describe('Dream', function () {
  describe('namedSchema', function () {
    it('should display an instance of a named schema', function () {
      expect(dream.useSchema('NamedSchema').generate().output()).to.deep.equal({name: ''});
    });
  });
});
