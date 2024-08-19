const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key); // to access key
    console.log(myObject[key]); // to access value  
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]); - gives js,rb,py,java,cpp
    // console.log(key); - gives indexes 0, 1, 2, 4, 5...    
}
// keys of array are indexes of an any array

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// maps are not iteratable using for..in loop