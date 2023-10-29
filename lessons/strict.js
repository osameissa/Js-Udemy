// Must be first line of code for strict mode to work!
// more safe mode, forbids some functions & adds visible errors
"use strict"; 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// SyntaxError: Unexpected strict mode reserved word
// const interface = "Audio";
// const private = 534;