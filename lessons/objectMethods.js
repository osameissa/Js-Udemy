const bob = {
    firstName: 'Bob',
    lastName: 'Anderson',
    birthYear: 2000,
    job: 'teacher',
    friends: ['Michael, Steven,Peter'],
    hasDriversLicense: true,
    
    /* object method, function is a property of object (an expression)
    calcAge: function(birthYear) {
        return 2042 - birthYear;
    } */

    calcAge: function () {
        console.log(this);
        return 2042 - this.birthYear;
    }
};

console.log(bob.calcAge());
console.log(bob['calcAge']());