// Array Literal 
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Using new Array() Constructor:
let intFruits = new Array("Kiwi", "Dragon Fruit", "Papaya", "Avocado");

let studentName = [];
studentName[0] = "Nirdesh";
studentName[1] = "Ankit";
studentName[2] = "Vimal";
studentName[3] = "Satyam";
studentName[4] = "Uchit";

// Method Array 
fruits.push("Grapes");  // add last element
fruits.pop();  // remove last element

intFruits.unshift("Pineapple");  // add first Element
intFruits.shift();  // remove first element

console.log(fruits[0]);

let checkLenght = intFruits.length;
console.log(checkLenght);

console.log(intFruits);