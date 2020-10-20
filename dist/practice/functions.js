"use strict";
function add(n1, n2) {
    return n1 + n2; // return infers the type
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// let combineValue: Function;
let combineValue;
// combineValue = printResult;
combineValue = add;
console.log(combineValue(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
