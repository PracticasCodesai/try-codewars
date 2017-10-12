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
        let array = [1];
        threeInOne(array);
        expect(array).to.have.members([1]);
    });
    it("given 1,2,3,4,5,6 expected 6,15", () => {
        let array = [1, 2, 3, 4, 5, 6];
        let result = threeInOne(array);
        expect(result).to.have.members([6,15]);
    });
    it("given 1,2,3,4,5,6 expected length 2", () => {
        let array = [1, 2, 3, 4, 5, 6];
        let result = threeInOne(array);
        result.length.should.equal(2);
    });
});