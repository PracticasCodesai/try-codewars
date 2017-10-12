"use strict";

let threeInOne = function (array) {
    let cloneArray = Object.assign([],array);
    return cloneArray.map((n, index) => sumThree(cloneArray.splice(0, index + 3)));
};

function sumThree(array) {
    let aux = 0;
    array.map(n => aux = aux + n);
    return aux;
}

module.exports = threeInOne;