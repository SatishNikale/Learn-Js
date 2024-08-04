const marvel_heros = ["thor", "ironman", "spider"];

const dc_heros = ["superman", "flash", "batsman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);

[ 'thor', 'ironman', 'spider', [ 'superman', 'flash', 'batsman' ] ]
// array in array if we use .push method

const allHeros = marvel_heros.concat(dc_heros);
// concate array and return new array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// spread operator in java
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], [5, 6, [7, 8, 9]]];
const realArray = another_array.flat(3);
// give single arr from array of array, we can also give depth of this

// console.log(realArray);

console.log(Array.isArray("satish"));
console.log(Array.from("Satish"));
console.log(Array.from({name : "Satish"})); // interesting (imp)

let score1 = 100;
let score2 = 200;
let score3 = 300;

let totalScore = Array.of(score1, score2, score3);
// combine variables into array
console.log(totalScore);
