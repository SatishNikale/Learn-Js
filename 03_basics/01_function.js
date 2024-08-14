// rest/spread operator in function

function calculateCartPrice(...number){
    return number;
}

console.log(calculateCartPrice(100, 200, 300));

// take N number of inputs together & return single Array 

function calculateCartPrice2(val1, val2, ...number){
    return number;
}

console.log(calculateCartPrice2(100, 120, 300, 400));
// val1 take 100, cal2 take 120, and number will take 300 and 400 both


const user = {
    userName : "satish",
    price : 199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
    
}

// handleObject(user);

handleObject({
    userName : "sunny",
    price : 1999
})

const myNewArr = [200, 450, 300, 500];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 450, 300, 500]));