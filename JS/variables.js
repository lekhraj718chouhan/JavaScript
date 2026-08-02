const accountId = 123456
let accountEmail = "lekhraj@google.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;


// accountId = 2  not allowed

accountEmail = "Lc@sc.com"
accountPassword = "987456"
accountCity = "Bhopal"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])


/*
Prefer not to use Var
because of issue in block scpoe and functional scope
*/