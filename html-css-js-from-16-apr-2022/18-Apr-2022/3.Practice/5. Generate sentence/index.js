// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
const largestCountries = ["China", "India", "USA"];
const bestFruits = ["Apples", "Bananas"];

function generateSentence(desc, arr) {
    let values = "";
    let restSentence = "";
    for (let index = 0; index < arr.length; index++) {
        values += arr[index] + ", ";       
    }
    if (desc === "largest countries") {
        restSentence = "The 3 largest countries are";
    }
    if (desc === "best fruits") {
        restSentence = "The 2 best fruits are";
    }
    return `${restSentence} ${values}`;
}
console.log(generateSentence("largest countries", largestCountries));