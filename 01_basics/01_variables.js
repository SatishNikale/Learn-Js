const accountId = 627040;
let accountEmail = "satishnikale7@gmail.com";
var accountPassword = "1234";
accountCity = "Aurangabad";
let accountState;  // show undefined

/*accountId = 123456; 
we cannot change const if once initialised
*/


accountEmail = "abc@gmail.com";
accountPassword = "112121";
accountCity = "Pune";

console.log(accountId);

/* Prefer not to use var 
because od issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 
// for printing content in the form of table