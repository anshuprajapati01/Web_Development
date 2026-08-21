let subjects = [
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "DAA",
    "Compiler Design"
];
for (let subject of subjects) {
    console.log(subject);
}
let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
console.log("Task 1 - Skills:", skills);

console.log("First element:", skills[0]); 
console.log("Third element:", skills[2]);
console.log("Last element:", skills[skills.length - 1]);

skills[3] = "Vue.js"; // Let's change 'React' to 'Vue.js'
console.log("Task 3 - Modified Skills:", skills);

// Add to end
skills.push("TypeScript");
console.log("After push:", skills);

// Remove from end
skills.pop();
console.log("After pop:", skills);

// Add to beginning
skills.unshift("Git");
console.log("After unshift:", skills);

// Remove from beginning
skills.shift();
console.log("After shift:", skills);
console.log("Contains JavaScript?", skills.includes("JavaScript")); // true
console.log("Contains Python?", skills.includes("Python"));         // false

let jsIndex = skills.indexOf("JavaScript");
console.log("Index of JavaScript:", jsIndex);

let numbers = [10, 20, 30, 40, 50];
let extracted = numbers.slice(1, 4); // Starts at index 1 (20), stops before index 4 (50)
console.log("Task 7 - Sliced numbers:", extracted); // [20, 30, 40]

let fruits = ["Apple", "Banana", "Mango"];
// Start at index 1, delete 0 items, insert "Orange"
fruits.splice(1, 0, "Orange"); 
console.log("Task 8 - Spliced fruits:", fruits); // ["Apple", "Orange", "Banana", "Mango"]

let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log("--- Using for loop ---");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log("--- Using for...of loop ---");
for (let student of students) {
  console.log(student);
}

let sumNumbers = [10, 20, 30, 40, 50];
let total = 0;

for (let num of sumNumbers) {
  total += num; // This is shorthand for: total = total + num
}
console.log("Task 10 - Total Sum:", total); // 150


let randomNumbers = [23, 56, 12, 89, 45, 67];
let largest = randomNumbers[0]; 

for (let i = 1; i < randomNumbers.length; i++) {
  if (randomNumbers[i] > largest) {
    largest = randomNumbers[i]; // Update the largest found so far
  }
}
console.log("Task 11 - Largest number is:", largest); // 89


let cart = ["Laptop", "Mouse", "Keyboard"];

// Add "Headphones"
cart.push("Headphones");

// Remove "Mouse"
// Best practice: Find its index dynamically, then remove it
let mouseIndex = cart.indexOf("Mouse");
if (mouseIndex !== -1) {
  cart.splice(mouseIndex, 1); 
}

// Check whether "Laptop" exists
console.log("Is Laptop in cart?", cart.includes("Laptop"));

// Print all items using a loop
console.log("--- Items in Cart ---");
for (let item of cart) {
  console.log(item);
}

// Print total number of items
console.log("Total items in cart:", cart.length);