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
let ran1 = Math.floor(Math.random() * 100) + 1;
 if(ran1 % 5 === 0) {
    attempts++;
    console.log(`The randome number is ${ran1} and it took ${attemts} attempt/s to generate it`);
 }