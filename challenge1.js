const massMark = 78;
const heightMark = 169;
const massJohn = 92;
const heightJohn = 195;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(typeof markHigherBMI);
console.log(markHigherBMI);