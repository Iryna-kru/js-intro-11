console.log('\n--------TASK01--------\n');

/*Write a function named hasUpperCase() which takes a string argument
 and return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false

 */

const hasUpperCase = (string) => {
    for(i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John") );
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));

         console.log('\n--------TASK02--------\n');

/*Write a function named noDigit() which takes a string argument 
and returns a new string with all digits removed from the original string​.
Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
 */

const noDigit = (string) => {
    return [...string].filter(char => isNaN(char) || char === ' ').join('');

}
console.log(noDigit("") );
console.log(noDigit("Javascript") );
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));


         console.log('\n--------TASK03--------\n');

/*Write a function named noVowel() which takes a string argument and
 returns a new string with all vowels removed from the original string​.
Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"

 */

const noVowel = (string) => {
    return [...string].filter(char => !('AEIOUaeiou').includes(char) || char === ' ').join('');
}

console.log(noVowel("TechGlobal"));
console.log(noVowel("AEOxyz"));
console.log(noVowel("Javascript"));
console.log(noVowel("") );
console.log(noVowel("125$") );


         console.log('\n--------TASK04--------\n');

/*Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s. ​
Examples:
no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []
 */

const no13 = (array) => {
    return array.map(num => num === 13 ? 0 : num);
    
}

console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]) );
console.log(no13([13, 13, 13 , 13, 13]) );
console.log(no13([]) );

         console.log('\n--------TASK05--------\n');

/*Write a function named middleInt() which takes three number arguments
 and return the middle number. ​
Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10

 */

const middleInt = (a, b, c) => {
   return (a +  b + c) - Math.max(a, b, c) - Math.min(a, b, c);
}

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10) );

         console.log('\n--------TASK06--------\n');

/*Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0

 */

const sumOfDigits = (string) => {
    let sum = 0;
    for (let char of string) {
        if (!isNaN(char) && char !== ' ') {
            sum += Number(char);
        }
    }
    return sum;
}
console.log(sumOfDigits("Javascript"));
console.log(sumOfDigits("John's age is 29"));
console.log(sumOfDigits("$125.0"));
console.log(sumOfDigits("") );

         
         console.log('\n--------TASK07--------\n');

/*Write a function named arrFactorial() which takes an array of numbers as argument
 and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []

 */

const arrFactorial = (array) => {
    return array.map((num) => {
        if(num < 2) return 1;
        let factorial = 1;
        for(let i = num; i >= 2; i--) {
            factorial *= i;
           
        }
        return factorial;
    })
}

console.log(arrFactorial([1, 2, 3 ,4]));
console.log(arrFactorial([0, 5]) );
console.log(arrFactorial([5 , 0, 6]));
console.log(arrFactorial([]) );


         console.log('\n--------TASK08--------\n');

/*Write a function named categorizeCharacters() which takes a string word as argument
 and return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]

 */

const categorizeCharacters = (word) => {
    let letters = '';
    let digits = '';
    let specials = '';
    for(let char of word) {
        if ((char >= 'a' && char <= 'z' ) || (char >= 'A' && char <= 'Z')) letters += char;
        else if ((char >='0' && char <= '9')) digits += char;
        else specials += char;

    }
    return[letters, digits, specials];
}

console.log(categorizeCharacters("1234"));
console.log(categorizeCharacters("abc123$#%") );
console.log(categorizeCharacters("12ab$%3c%") );


      

