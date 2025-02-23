const { getRandomNumber } = require('../MathHelper.js');

/*
Create 4 random numbers and within 1 and 5 (both inclusive) and find their average
*/

let r1 = getRandomNumber(1, 5);
let r2 = getRandomNumber(1, 5);
let r3 = getRandomNumber(1, 5);
let r4 = getRandomNumber(1, 5);

console.log(r1, r2, r3, r4);

console.log((r1 + r2 + r3 + r4) / 4);


/*Write a function named as middle() which takes a string word as an argument and returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.*/



/*Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the product of the random numbers is odd, print true.
Otherwise, print false.*/

/*Write a function named as doubleWord() which takes a string word as an argument and returns the given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.

Examples:
doubleWord("Tech")		-> "TechTech"
doubleWord("Global")	-> "GlobalGlobal"
 */