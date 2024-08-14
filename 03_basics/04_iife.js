// Emidiately invoked function expression - IIFE

(function chai(){
    // named IIFE
    console.log("DB Connected");
    
})(); // give ";" for 2 IIFE in single js file

((name) =>{
    console.log(`DB Connected, ${name}`);
    
})('Satish') // parameteres to IIFE