"use strict";

let threeInOne = function (array) {
    let cloneArray = Object.assign([],array);
    let resultArray = Array.from({length: array.length/3});
    return resultArray.map((n, index) => cloneArray.splice(0,3)
            .reduce((a,b) => a+b));
};

module.exports = threeInOne;