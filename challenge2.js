const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
let higherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

if (higherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${(BMIJohn)})!`);
} else {
    console.log(`John's (${(BMIJohn)}) BMI is higher than Mark's (${BMIMark})`);
}