// Inefficient data structure, individual variables for friends
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Array to store friends' names
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Creating an array using the Array constructor
const y = new Array('1991', '2004', '2006');
console.log(y);

// Accessing array elements by index
console.log(friends[0]);
console.log(friends[2]);

// Determining the length of the array
console.log(friends.length);

// Accessing the last element of the array
console.log(friends[friends.length - 1]);

// Replacing an element of array
friends[2] = 'Jay';
console.log(friends);

// Creating an array to store information about 'Bob'
const firstName = 'Bob';
const birthYearr = 2000;
const bob = [firstName, 'Anderson', 2042 - birthYearr, 'Teacher', friends];
console.log(bob);

// Getting the length of the 'bob' array
console.log(bob.length);

// Function to calculate age from birth year
const calcAge = function (birthYear) {
    return 2042 - birthYear;
}
const birthYear = 2000;
console.log(calcAge(birthYear));

// Array containing birth years
const years = [1990, 1991, 1992, 1993, 1994];

// Calculating ages for specific years and logging them
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

// Creating an array of ages by calling the calcAge function on specific years
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]; // [years.length - 1] = last element in array
console.log(ages);