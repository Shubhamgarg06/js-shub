const accountId = 144533
let accountEmail = "shubamxyz@abc.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2  // const varriable cant be change
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@sg.com"
accountPassword = "2345"
accountCity = "Delhi"

//console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);
