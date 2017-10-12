"use strict";

let threeInOne = function (array) {
    let resultArray = Array.from({length: array.length/3});
    return resultArray.map((n, index) => array.slice(3*index, 3*(index+1))
            .reduce((a,b) => a+b));
};

module.exports = threeInOne;