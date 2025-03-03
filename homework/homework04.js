    console.log('\n--------TASK01--------\n');

/*Write a program that outputs all the numbers that are divisible by 7 
starting from 1 to 100 (both inclusive).
*/
for(i = 1; i <= 100; i++){
    if(i % 7 === 0) console.log(i);
    }

    console.log('\n--------TASK02--------\n');

/*Write a program that outputs all the numbers that are divisible by both 2 and 3 
starting from 1 to 50 (both inclusive).
 */
for(i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}

    console.log('\n--------TASK03--------\n');

 /*Write a program that outputs all the numbers that are divisible by 5 starting
  from 100 to 50 (both inclusive).
 */   

 for(i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
 } 

    console.log('\n--------TASK04--------\n');

 /*Write a program that outputs the squares of all numbers starting from 0 to 7 
 (both inclusive).
NOTE: Use loop!!!
*/

for(i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i**2}`);
}

     console.log('\n--------TASK05--------\n');

/*Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
*/
let sum = 0;
for(i = 1; i <= 10; i++) {
    sum += i;
}
  console.log(sum);

      console.log('\n--------TASK06--------\n');

 /*Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/ 

let factor = 1;
let r1 = Math.floor(Math.random() * 10) + 1;
console.log(`The randome number is = ${r1}`);
for(i = r1; i >= 1; i--) {
    factor *= i;
}
 console.log(`The factorial of ${r1} is ${factor}`);


        console.log('\n--------TASK07--------\n');

/*Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.

The program should also count how many attempts it takes to generate such a number.

Eventually, print the random number divisible by 5 with the number of attempts as
 below.

Expected Output:The random number is {randomNumber} and it took {attempts} attempt/s
 to generate it.
*/
let attempts = 0;
let randomNumber;

 while (randomNumber % 5 !== 0) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    attempts++;
    
 }
 let time = attempts === 1 ? 'time': 'times';
 console.log(`The randome number is ${randomNumber} and it took ${attempts} ${time} to generate it`);

                
        console.log('\n--------TASK08--------\n');

/*-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
*/

const countries =['Germany', 'Argentina', 'Ukraine', 'Romania'];
console.log(countries);

console.log(countries.sort());


        console.log('\n--------TASK09--------\n');

/*Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true

 */

const namesDisney = [ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ];
      
 console.log(namesDisney);
 console.log(namesDisney.includes('Pluto'));


         console.log('\n--------TASK10--------\n');

/*Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

const catsNames = [ 'Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(catsNames.sort());
console.log(catsNames.includes('Garfield') && catsNames.includes ('Felix'));

         
         console.log('\n--------TASK11--------\n');

/*Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
 */

const arr = [10.5, 20.75, 70, 80, 15.75];
    console.log(arr);

for(let i = 0 ; i < arr.length; i++) {
    console.log(arr[i]);

}

         console.log('\n--------TASK12--------\n');

/*Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
 */

const objects = [ 'Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ];

console.log(objects);

let counterBP = 0;
let counterBookPen = 0;
for(i = 0; i < objects.length; i++) {
    if(objects[i].toUpperCase().startsWith('B') || objects[i].toUpperCase().startsWith('P')) {
        counterBP++
    }
      if(objects[i].toLowerCase().includes('book') || objects[i].toLowerCase().includes('pen')) {
        counterBookPen++
      }
}
 console.log(`Elements starting with 'B' or 'P' = ${counterBP}`);
 console.log(`Elements having 'book' or 'pen' = ${counterBookPen}`);


         console.log('\n--------TASK13--------\n');

/*Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2

 */
const numbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbers);
let counterMore10 = 0;
let counterLess10 = 0;
let counterEqual10 = 0;

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] > 10) counterMore10++;
    else if(numbers[i] < 10) counterLess10++;
    else counterEqual10++;
}
console.log(`Elements that are more than 10 = ${counterMore10}`);
console.log(`Elements that are less than 10 = ${counterLess10}`);
console.log(`Elements that are 10 = ${counterEqual10}`);


        console.log('\n--------TASK14--------\n');

/*Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]

 */

const arr1 = [ 5, 8, 13, 1, 2 ];
const arr2 = [ 9, 3, 67, 1, 0 ];
const arr3 = [];

for(i = 0; i < arr1.length; i++) {
    let max = Math.max(arr1[i], arr2[i]);
    arr3.push(max);

}
console.log(`1st array is = [${arr1}]`);
console.log(`2st array is = [${arr2}]`);
console.log(`3st array is = [${arr3}]`);


 
console.log('\n--------TASK15--------\n');

/*Write a function named as firstDuplicate() which takes an array argument 
and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are 
no duplicates in the array. For two elements to be considered as duplicated, 
value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1

 */
function firstDuplicate(array) {

     array.sort();
     console.log(array)
     
        
        for(let i = 0; i < array.length; i++) {
         if(array[i] === array[i+1]){
            console.log(array[i]);
         break;
       
     }
    }
    }

console.log(firstDuplicate( [ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));

//-----------------------------------another solution------------------------------------

/*function firstDuplicate(array) {
    array.sort();
for(let i = 0; i < array.length; i++) {

    for(let j = i + 1;  j < array.length; j++ ) {
        if (array[i] === array[j]) {
            console.log(array[i]); 
            break;    
        }
        }   
    }
 
}
console.log(firstDuplicate( [ 123, 'abc', '123', 3, 'abc' ]));
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
*/


         console.log('\n--------TASK16--------\n');

/*Write a function named as getDuplicates() which takes an array argument and returns all 
the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are 
no duplicates in the array. For two elements to be considered as duplicated, value and data types
 of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]

 */

         console.log('\n--------TASK17--------\n');


/*Write a function named as reverseStringWords() which takes a string as an argument and
 returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces
 before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""

 */
     function reverseStringWords(string) {
        let stringAr = string.trim().split(' ');
        console.log(stringAr);
        let stringReverse = [];
        
        for(let i =0; i < stringAr.length; i++){
         let reverse = stringAr[i].split('').reverse().join('');
        stringReverse.push(reverse);
           
     }
     console.log(stringReverse.join(' '));
 }

 console.log(reverseStringWords("Hello World"));
 console.log(reverseStringWords("I like JavaScript"));
 console.log(reverseStringWords("Hello "));
 console.log(reverseStringWords(""));
 console.log(reverseStringWords("   "));


         console.log('\n--------TASK18--------\n');

 /*Write a function named as getEvens() which takes 2 number arguments and returns all 
 the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array 
if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]
  */

function  getEvens(n1, n2) {

    let min = Math.min(n1, n2);
    let max = Math.max(n1, n2);

    let evens = [];
    if (min % 2 !== 0) {
        min++;
    }
    for ( let i = min; i <= max; i+= 2){
        evens.push(i)
    }
    return evens;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

         console.log('\n--------TASK19--------\n');

/*Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers
 divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]

 */
function getMultipleOf5(num1, num2) {
    let divFive = [];
    if ( num1 < num2) {
    for ( let i = num1; i <= num2; i++){
        if ( i % 5 === 0)  divFive.push(i);     
    }
    }
    else {
        for( let i = num1; i >= num2; i-- ){
            if ( i % 5 === 0)  divFive.push(i);     
    }
        }
    return divFive;
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));

         console.log('\n--------TASK20--------\n');

/*Write a function named as fizzBuzz() which takes 2 number arguments and returns 
a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive)
 and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"

 */

function fizzBuzz(number1, number2) {
    let min = Math.min(number1, number2);
    let max = Math.max(number1, number2);
    let arrNew = []

    for( i = min; i <= max; i++) {
       
        if((i % 3 === 0) && (i % 5 === 0)) arrNew.push('FizzBuzz');
        else if (i % 5 === 0) arrNew.push('Buzz');
        else if (i % 3 === 0) arrNew.push('Fizz');
        else arrNew.push(i);
    
    }
    return arrNew.join(' | ');
}
console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));

        