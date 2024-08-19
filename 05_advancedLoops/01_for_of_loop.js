// for of - used for array, string, map, objects : 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// Objects are not iteratable using for of loop.