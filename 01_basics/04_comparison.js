/* ********* Avoid these kind of conversion in JS****** */
// console.log("2" > 1); // true
// console.log("02" > 1); // true
// JS automatically converted strung "2" to a number

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// console.log(undefined > 0);    // false
// console.log(undefined == 0);   // false
// console.log(undefined < 0);   // false


// === (Strict check - value as well as dataType)

// console.log("2" === 2); // false


