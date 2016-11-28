(function(){
  'use strict';
var chai = require('chai');
var expect = chai.expect;
var Trailer = require('../app/carlab.js');
  describe("Test trailer", function() {

    it("should have speed of 20km/hr", function() {
      var innoson = new Trailer('Innoson', 'Truck', 'trailer');
      expect(innoson.speed).to.be.equal('20 km/h');
    });

    it("should not be a saloon", function() {
      var man = new Trailer('MAN', 'Truck', 'trailer');
      expect(man.isSaloon).to.be.equal(false);
    });

    it("should have 8 wheels", function() {
      var howo = new Trailer('Sino Howo', 'Truck', 'trailer');
      expect(howo.numOfWheels).to.be.equal(8);
    });
  });
    
})();

