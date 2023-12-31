const bob = {
  firstName: "Bob",
  lastName: "Anderson",
  birthYear: 1954,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
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
  },
  // property
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      bob.job
    } and he/she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// only need to calculate age once
console.log(bob.calcAge());

// retrieving the age property of object
console.log(bob.age);

// retrieving getSummary property of object
console.log(bob.getSummary());
