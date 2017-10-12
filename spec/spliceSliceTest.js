'use strict';

let should = require('chai').should();
let expect = require('chai').expect;
let threeInOne = (require("../src/ThreeInOne"));


describe('Basic Test', () => {
    it("given 1,2,3 expected 6", () => {
        let array = [1, 2, 3];
        let result = threeInOne(array);
        expect(result).to.have.members([6]);
    });
    it("given 5,20,25 expected 50", () => {
        let array = [5, 20, 25];
        let result = threeInOne(array);
        expect(result).to.have.members([50]);
    });
    it("original array is not modified", () => {
        let arrayAux = [];
        let array = arrayAux;
        threeInOne(array);
        array.should.equal(arrayAux);

    })
});