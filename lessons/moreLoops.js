const bob = [
  "Bob",
  "Bobsson",
  2042 - 1954,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// looping bob[] backwards
for (let i = bob.length - 1; i >= 0; i--) {
  console.log(i, bob[i]);
}

// loopception, loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise} 🏋️!`);

  for (let rep = 1; rep < 11; rep++) {
    console.log(`Exercise: ${exercise}, Rep: ${rep}!`);
  }
}

// while loop, only needs one condition and is optimal when there counter-variable is unknown
let rep = 1;

while (rep <= 10) {
  console.log(`Rep ${rep}: Weight lifting 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(`Dice: ${dice}`);

// loops ends when dice = 6
while (dice !== 6) {
  console.log(`You rolled a: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}