"use strict";

// DRY code: dont repeat yourself.

function logger() {
  console.log("My name is Bob");
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// logging result directly
console.log(fruitProcessor(5, 0));

// storing result in a variable before logging
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(`${orangeJuice} Enjoy your orange juice :)`);

// Function declaration (can call function before it is defined)
function calcAge1(birthyear) {
  return 2042 - birthyear;
}

const age1 = calcAge1(2000);

// Function expression
const calcAge2 = function (birthYear) {
  return 2042 - birthYear;
};

const age2 = calcAge2(2000);

//  Arrow function
const calcAge3 = (birthYear) => 2042 - birthYear;
const age3 = calcAge3(2000);

console.log(age1, age2, age3);

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2042 - birthYear;
  const retirement = 65 - age;
  // return retirment;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement2(1991, "Alice"));
console.log(yearsUntilRetirement2(2000, "Bob"));

function fruitSlicer(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = fruitSlicer(apples);
  const orangePieces = fruitSlicer(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 4));

const calcAge = function (birthYear) {
  return 2042 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2000, "Alice"));
