// [ARRAYS] more optimal for structured data (indexed)
const bobArray = [
    'Alice', 
    'Bob',
    2042 - 2000,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

// {OBJECTS} more optimal for unstructured data
// gets ordered alphabetically
const bobObject = { // this object has 5 "properties"
    firstName: 'Bob',
    lastName: 'Bobson',
    age: 2042 - 2000,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

// dot-notation
console.log(bobObject.job);

// bracket-notation
console.log(bobObject['lastName']);

// you can put any expression in brackets
const nameKey = 'Name' ;
console.log(bobObject['first' + nameKey]);
console.log(bobObject['last' + nameKey]);

// prompts window, requires input & logs value of property
const whatWant = prompt('What do you want to know?');
console.log(whatWant);

if(bobObject[whatWant]) {
    console.log(bobObject[whatWant]);
} else {
    console.log('False property');
}

bobObject.location = 'Send me location';
bobOject['x'] = '@elonmusk;'
console.log(bobObject);

// Challenge
// Bob has 3 friends, and his best friend is Michael, no hardcoding!'
console.log(`${bobObject.firstName}`)
