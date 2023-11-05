const bob = {
    firstName: 'Bob',
    lastName: 'Anderson',
    birthYear: 1954,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,
    currentYear: 2042,

    /* object method, function is a property of object (an expression)
    calcAge: function(birthYear) {
        return 2042 - birthYear;
    } 

    calcAge: function () {
        console.log(this);
        return this.currentYear - this.birthYear;
    } */

    calcAge: function () {
        this.age = 2042 - this.birthYear;
        return this.age;
    }
};

// only need to calculate age once
console.log(bob.calcAge());

// consoling out age property of object
console.log(bob.age);
console.log(bob.age);