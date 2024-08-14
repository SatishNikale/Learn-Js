// object literals 

const mySymbol = Symbol("key1");


const jsUser = {
    name : "satish", 
    "full name" : "satish nikale",
    age : 21, 
    [mySymbol] : "symbolkey1",
    location : "aurangabad",
    email : "satish@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday", "sunday"]
}

// ways to acces literals

// console.log(jsUser.location);
// console.log(jsUser["location"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "satishnikale@chatgpt";

// Object.freeze(jsUser); 
// After using freeze method on Objects we cannot make changes in any object, 
// this does not give an error but changes get not reflected

jsUser.email = "satish@microsoft.com";

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


