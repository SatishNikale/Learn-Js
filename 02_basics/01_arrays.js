const myArr = [1, 2, 3, 4];
const myArr2 = ["Satish", "Amit", "Matin"];

const heros = new Array("Shaktiman", "Nagraj", "Hansraj", "BhuvanBam");

// console.log(heros[1]);

// Arrays Methods in JS

myArr.push(7); // add value to the end
myArr.pop();   // remove last value

myArr.unshift(9); // add new value at 0th index
myArr.shift();    // remove value of first index

// console.log(myArr);

// console.log(myArr.includes(10)); // true, false
// console.log(myArr.indexOf(1));   // return index otherwise return -1

// const newArr = myArr.join(); // join arr & return as a String

// console.log(newArr);

// slice(), splice()

console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // give output of given idx (1, 3) only

console.log(myn1);
const myn2 = myArr.splice(1, 3);
console.log(myn2);

// splice method remove elm from given range(inclusive) and made changes in original array while slice give element within range with exclude ending index







