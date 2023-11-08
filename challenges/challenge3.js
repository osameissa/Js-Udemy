const totalDolphins = Number(69) + Number(108) + Number(89);
const scoreDolphins = totalDolphins / 3;
const totalKoalas = Number(88) + Number(91) + Number(110);
const scoreKoalas = totalKoalas / 3;

console.log(`Dolphins average score: ${scoreDolphins}
Koalas average score: ${scoreKoalas}`);

if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else {
  console.log("Koalas win the trophy");
}
