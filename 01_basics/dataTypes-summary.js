// Primitive Data Types : (Seven primitive data-types)
/*

**All the datatypes are call by value (share as a copy)**

    1. String
    2. Number
    3. Boolean
    4. null        (empty)
    5. undefined   (not assigned)
    6. symbol      (special type)
    7. BigInt      (for larger values)

*/

 /*
    What does Dynamic Language mean? (imp for intervies)
    JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don’t need to declare the data type of a variable explicitly.

    Eg.
 */

    const score = 100;
    const scoreValue = 100.33;

    const isLoggedIn = false;
    const outsideTemprature = null;
    let userEmail;


    const bigInt = 367583982626234534n; // for bigint
    const id = Symbol('123');
    const anotherId = Symbol('123');

    // console.log(id === anotherId); 
    //because of  Symbol data type


    
// Non-Primitive (Refference)
    // 1. Array
    // 2. Objects
    // 3. Functions

   
    const name = ["Satish", "Mangesh", "Jatin"];

    let myObject = {
        name : "satish", 
        age : 21,
        college : "SBES college of sciece"
    }

    let myFinction = function(){
        console.log("Hello Satish");        
    }

    /*
        ******* typeof Operator result *******

        type of val                     Result
        
        1. undefined                1. "undefined"
        2. null                     2. "object"
        3. boolean                  3. "boolean"
        4. number                   4. "number"
        4. string                   5. "string"
        5. function                 6. "function object"
        6. Non primitive data type  7. "object"   
    
    */