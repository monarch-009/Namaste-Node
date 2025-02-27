// Module protectes their variable and function from Leacking 
console.log("Sum Module Executed");

// export var x = "Hello World";
var x = "Hello World";

// export function calculateSum(a, b) {
//     const sum = a + b;
//     console.log(sum);
// }

function calculateSum(a, b) {
    const sum = a + b;
    console.log("Sum is: ", sum);
}

// Old Way to export function from module.
module.exports = {
    // x: x,
    calculateSum: calculateSum,
};