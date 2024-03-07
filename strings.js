 //Question1
 s1="extravaganza";
 substr=s1.substring(12,8);

console.log({substr});
//Question2

constfood = "The quick brown fox jumps over the lazy dog";
let stringToAdd = "eat";
let insertAtIndex = 4;
constfood = constfood.split("");
constfood.splice(insertAtIndex,0,stringToAdd);
newstring = constfood.join("");

console.log(newstring);
//Question3
const story="The quick brown fox jumps over the lazy dog";

//Question4


const string1 = "The pupils are reading in the library";
const searchword = "are";
const located = string1.includes(searchword);
console.log("is 'are' located?",located);

const string2 = "The child was sitting on the table before it fell";
const searchstatement = "sitting";
const found = string2.includes(searchstatement);
console.log("is 'sitting' found?",found);

//Question5

let word= "Wonderful";
let word2 = "amazing";
let result = word.toUpperCase();
result2 = word2.toLowerCase();
console.log(result);
console.log(result2);

