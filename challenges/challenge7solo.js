const persons = {
  mark: {
    name: "Mark",
    age: 44,
    weight: 0.78,
    height: 1.69,
    calcBMI: function () {
      this.BMI = this.weight / this.height ** 2;
      return this.BMI;
    },
  },
  john: {
    name: "John",
    age: 23,
    weight: 0.92,
    height: 1.95,
    calcBMI: function () {
      this.BMI = this.weight / this.height ** 2;
      return this.BMI;
    },
  },
};

const markBMI = persons.mark.calcBMI();
const johnBMI = persons.john.calcBMI();

console.log(
  `${persons.john.name}'s BMI (${johnBMI}) is ${
    johnBMI > markBMI ? "higher" : "lower"
  } than ${persons.mark.name}'s (${markBMI})!`
);
