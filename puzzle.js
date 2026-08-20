"use strict";

// Make test() return true
// you can only edit arbitraryName

function test() {
    let value = arbitraryName();

    let a = value.current;
    let b = value.current;

    return a !== b && a + b === 3
}

function arbitraryName() {
    return {
        current: 1
    }
}

console.log(test() ? "yae" : "nae");
