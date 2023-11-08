// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money) {
  log("Don't spend it all.");
} else {
  console.log("You should get a job.");
}

// Will be false if height = 0, since "0" is undefined
let height = 0;
if (height) {
  console.log("Height is defined.");
} else {
  console.log("Height is undefined.");
}

// Is age 18?
const age = 18;
// Boolean with same type of variables.
// Use strict equality to avoid bugs in code.
if (age === 18) console.log("You are 18 years old (strict)");
// Boolean with two types of variables (string & number).
if (age == 18) console.log("You are 18 years old (loose)");

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log("Nice, 23!");
} else if (favourite === 7) {
  console.log("Nice, 7!");
} else {
  console.log("Number is neither 7 or 23.");
}

if (favourite !== 23) console.log("Why not 23?");
