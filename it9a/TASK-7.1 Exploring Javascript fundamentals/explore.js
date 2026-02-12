console.log("JavaScript is running successfully!");
console.log("_____________________________________");

var name = "Alex";
let age = 20;
const school = "Code University";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("School: " + school);
console.log("_____________________________________");

function localScope() {
  let localVar = "I am local";
}
console.log(localVar);
console.log("_____________________________________");

const textn = "const variable";
textn = "Trying to change const";
console.log("_____________________________________");

let string = "15";
let number = 5;
let istrue = false;
let bool = istrue ? 1 : 2;
let undefined;

console.log("String: " + string);
console.log("Number: " + number);
console.log("Boolean: " + bool);
console.log("Undefined: " + undefined);
console.log("_____________________________________");

let num1 = 10;
let num2 = 5;
const sum = num1 + num2;
const minus = num1 - num2;
const product = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2;
const exponentiation = num1 ** num2;

console.log("Sum: " + sum);
console.log("Difference: " + minus);
console.log("Product: " + product);
console.log("Division: " + division);
console.log("Modulus: " + modulus);
console.log("Exponentiation: " + exponentiation);
console.log("_____________________________________");

for (let i = 1; i <= 5; i++) {
  console.log("step: " + i);
}
console.log("_____________________________________");

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Student"));
console.log("_____________________________________");

let stringnum = "5";
let num3 = 5;

console.log(stringnum == num3); // true
console.log(stringnum === num3); // false
