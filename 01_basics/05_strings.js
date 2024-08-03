// Stack (Primitive)   => not permenant change because of copy of variables
// Heap(Non-primitive) => permenant change got happened


// ****** Strings in JS *******

const name = "Satish";
const score = 50;

console.log(name + " score is " +  score);

console.log(`Hello my name is ${name} and my score is ${score}`); 

const gameName = new String("satishhh");

console.log(gameName[0]);    // s

console.log(gameName.__proto__); // give the proto-type => {}

/* ---------------- String methods in JS ---------------- */
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(2));
    console.log(gameName.indexOf('t'));

    
    const newString = gameName.substring(0, 4);
    console.log(newString);



    
    const str = gameName.slice(-8, 3);
    console.log(str);

    const names = "   satish      ";
    console.log(names);
    console.log(names.trim());
    

    const url = "htpps://satish.com/hitesh%20choudhary";
    console.log(url.replace('%20', '-'));

    console.log(url.includes('hitesh'));

    console.log(url.split('/'));