const friends = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'];

// Add elements
friends.unshift('X'); // adds to the start of []
const newLength = friends.push('Frank'); // pushes into the end of []

console.log(`List of friends: ${friends} 🥳`); // Displays the updated list of friends
console.log(`Our community: ${newLength} people 🌱`);

// Remove elements
friends.pop(); // removes last element of []
const popped = friends.pop(); // Removes and stores the last element
console.log(popped); // Logs the removed element
console.log(friends); // Displays the updated array without the last two elements

friends.shift(); // removes first element of []
console.log(friends); // Displays the updated array after removing the first element

console.log(friends.indexOf('Charlie')); // index of Charlie
console.log(friends.indexOf('X')); // index of X

friends.push(88);
console.log(friends.includes('Alice')); // true/false, is Alice in []
console.log(friends.includes('Steven'));
console.log(friends.includes('88')); // does not do type conversion, checks for string not number (returns false)
console.log(friends.includes(88)); // checks for the number 88 (returns true)

// Conditional statement based on array content
if (friends.includes('Bob')) {
    console.log('You have a fren called Bob 🐸');
}