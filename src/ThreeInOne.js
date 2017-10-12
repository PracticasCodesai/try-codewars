"use strict";

let threeInOne = function (array) {
    let aux = 0;
    array.map((n) => aux = aux +n );

    return [aux];
};


module.exports = threeInOne;