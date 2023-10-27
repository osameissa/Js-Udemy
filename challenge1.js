const massMark = 78;
const heightMark = 169;
const massJohn = 92;
const heightJohn = 195;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(typeof markHigherBMI);
console.log(markHigherBMI);