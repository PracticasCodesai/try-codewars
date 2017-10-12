'use strict';

let should = require('chai').should();
let assert = require('chai').assert;
let expect = require('chai').expect;

let Calculator = (require("../src/jsTestImport"));


describe('Basic Test', () => {
    it("test green",() => {
        true.should.equal(true);
    });

    it('import test green', function () {
        let calculator = new Calculator();
        let result = calculator.suma(5,7);
        result.should.equal(12);
    });

});