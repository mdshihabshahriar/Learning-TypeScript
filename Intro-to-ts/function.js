"use strict";
function divide(a, b) {
    if (b == 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log(divide(20, 2));
// console.log(divide("a", 2)); 
