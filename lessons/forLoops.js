// loops: automation for tasks

// for loops keeps running while rep is 1-10
for (let rep = 1; rep <= 4; rep++) {
    console.log(`Rep ${rep}: Weight lifting 🏋️`);
}

const bob = [
    'Bob',
    'Bobsson',
    2042 - 1954,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

// will console log elements of array (i < bob.length)
for (let i = 0; i < bob.length ; i++) {

    // reading bob[]
    console.log(bob[i], typeof bob[i]);

    /* filling types[]
    types[i] = typeof bob[i]; */
    types.push(typeof bob[i]);
}

console.log(types);

const years = [1991, 2002, 2012, 2033];
const ages = [];

for (let i=0; i < years.length; i++) {
    2042 - years[i];
    ages.push(2042 - years[i]);
}

console.log(ages);

// --CONTINUE & BREAK--

// log only 'string' elements, skipping those with a different data type using the continue statement

console.log(' --ONLY STRINGS--')
for (let i=0; i < bob.length; i++) {
    if(typeof bob[i] !== 'string') continue;
    console.log(bob[i], typeof bob[i]);
}

// log elements until the first number is encountered; then, break the loop
console.log(' --BREAK AFTER NUMBER--')
for (let i=0; i < bob.length; i++) {
    if(typeof bob[i] === 'number') break;
    console.log(bob[i], typeof bob[i]);
}