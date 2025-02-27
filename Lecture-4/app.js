require("./xyz.js"); // This will execute the code in xyz.js

// const calculateSum = require("./sum.js"); 

// const obj = require("./sum.js");
// const { x, calculateSum } = require("./calculate/sum.js");
// const { calculateMultiply } = require("./calculate/multiply.js");
// const {calculateDivision} =  require("./calculate/divide.js");

const {calculateSum, calculateMultiply,calculateDivision} = require("./calculate")

// import {x, calculateSum } from "./sum.js"; // ES6 New way to import module 
const data = require("./data.json");

var name = "Namaste Node.js";
var a = 100;
var b = 20;

// obj.calculateSum(a, b);
// console.log(obj.x);

calculateSum(a, b);
calculateMultiply(a, b);
calculateDivision(a,b);
console.log(data);
console.log(name);



