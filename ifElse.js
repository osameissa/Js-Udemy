const age = 15;
const isOldEnough = age  >= 18;
console.log(isOldEnough);

if(isOldEnough) {
    console.log("You can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Not old enough, come back in around ${yearsLeft} years.`);
}