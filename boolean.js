/* Basic boolean logic: and, or & not operators.
And: true when ALL are true (&&)
Or: true when ONE is tru
Not: inverts boolean value
*/

const hasLicense = true; // A
const hasGoodvision = true; //B
const isTired= false; // C

// && operator
console.log(`And-operator: ${hasLicense && hasGoodvision}`);
// || operator
console.log(`Or-operator: ${hasLicense || hasGoodvision}`);
// ! operator
console.log(`Not-operator: ${!hasLicense}`);

console.log(hasLicense && hasGoodvision && isTired);

if(hasLicense && hasGoodvision && !isTired) {
    console.log("Alice is able to drive!");
} else {
    console.log("Someone else should drive...");
}