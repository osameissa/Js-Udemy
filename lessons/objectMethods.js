const bob = {
    firstName: 'Bob',
    lastName: 'Anderson',
    age: 2042 - 2000,
    job: 'teacher',
    friends: ['Michael, Steven,Peter'],
    hasDriversLicense: true,
    // object method, function is a property of object (an expression)
    calcAge: function(birthYear) {
        return 2042 - birthYear;
    }
};

console.log(bob.calcAge(2000));
console.log(bob['calcAge'](2000));