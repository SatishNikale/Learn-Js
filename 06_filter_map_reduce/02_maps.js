// to perform same operation on each element generally map is used.it return the values


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})

const newNums2 = myNumers
                .map((num) => num * 10 ) // each num multiply by 10
                .map( (num) => num + 1)  // then add each 1
                .filter( (num) => num >= 40) // then filter which are >= 40 

console.log(newNums2);