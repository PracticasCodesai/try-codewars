"use strict";

let threeInOne = function (array) {
    let cloneArray = Object.assign([],array);
    let resultArray = Array.from({length: array.length/3});
    return resultArray.map((n) => sumThree(cloneArray.splice(0,  3)));
};

function sumThree(array) {
    let aux = 0;
    array.map(n => aux = aux + n);
    return aux;
}

module.exports = threeInOne;