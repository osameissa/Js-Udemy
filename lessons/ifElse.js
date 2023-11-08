// Old enough to start driving license?
const age = 15;
const isOldEnough = age >= 18;
console.log(isOldEnough);

if (isOldEnough) {
  console.log("You can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Not old enough, come back in around ${yearsLeft} years.`);
}

// Born in 21st or 20th century?
const birthYear = 1991;

let century;
if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
