const accountId = 1234567;
let accountEmail = "pandey@gmail.com";
var accountPassword = "123";
accountCity = "jaipur";
let accountState;

// accountId = 2; not allowed
console.log(accountId);

accountEmail = "uiuwq@.com";
accountPassword = "65625";
accountCity = "lucknow";

console.table([accountEmail,accountPassword,accountCity,accountState]);

/*
prefer not to use var
because of issue in block chian and functional scope
*/