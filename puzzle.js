"use strict";

// Make test() return true
// you can only edit getValue

function test() {
    const value = getValue();

    const a = value.current;
    const b = value.current;

    return a !== b && a + b === 3;
}

// start

function getValue() {
    return {
        current: 1
    };
}

// end

console.log(test() ? "PASS" : "FAIL");
