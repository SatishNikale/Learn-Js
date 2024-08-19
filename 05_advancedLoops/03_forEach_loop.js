// Higher order loop - forEach

// forEcah, for..of mostly used for arrays(but mostly forEach).

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )
// ForEach always accept callback function.

coding.forEach( (item) => {
    console.log(item);
} )
// Also accept arrow function

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
// we can pass another function in forEach but pass as a refference


coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// It has acces of array's item, indexes and whole array in every step

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (items) => {
    console.log(items.languageName); // key
    console.log(items.languageFileName); // value
    
} )