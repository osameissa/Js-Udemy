const bob = [
    'Bob',
    'Bobsson',
    2042 - 1954,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// looping bob[] backwards
for(let i = bob.length - 1; i >= 0; i-- ) {
    console.log(i, bob[i]);
}

// loopception, loop inside loop
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise ${exercise} 🏋️!`);

    for(let rep = 1; rep < 11; rep++) {
        console.log(`Exercise: ${exercise}, Rep: ${rep}!`);
    }
}

// while loop
