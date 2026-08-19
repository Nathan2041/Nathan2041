"use strict";

/*
    make test() true
    You can only edit the code between start and end
*/

function test() {
    const values = getValues();

    if (values.length !== 3)
        return false;

    const sorted = [...values].sort();

    return (
        sorted[0] === 1 &&
        sorted[1] === 2 &&
        sorted[2] === 3 &&
        values[0] === 3 &&
        values[1] === 2 &&
        values[2] === 1
    );
}


// start

function getValues() {
    return [3, 2, 1];
}

// end

console.log(test() ? "yay" : "nae");
