const score = 100;
console.log(score);

const bankBalance = new Number(100);
console.log(bankBalance);

console.log(bankBalance.toString().length); // 3
console.log(bankBalance.toFixed(2)); // 100.00

const anotherNumber = 2.45;

console.log(anotherNumber.toPrecision(2)); // 2.5

const price = 1000000;

console.log(price.toLocaleString()); // print USD type (1,000,000)

console.log(price.toLocaleString('en-IN')); // Indian style (10,00,000)

// --------- Maths in JS ----------- //



console.log(Math);

const value = -5;
console.log(Math.abs(value)); // 5

console.log(Math.round(5.5)); // 6
console.log(Math.round(5.49)); // 5

console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.min(1, 2, 3,4)); // 1
console.log(Math.max(1, 2, 3,4)); // 4

console.log(Math.random()); // 0 < Math.random < 1

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// **imp**

const min = 1;
const max = 6;

console.log(Math.floor(Math.random()* (max - min + 1)) + min)

