
/**
 * returns a random number between two numbers
 * @param {*} start starting number - inclussive
 * @param {*} end ending number - inlusive
 * 
 */
function getRandomNumber(start, end) {
    let max = Math.max(start, end);
    let min = Math.min(start, end);
   return  Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.getRandomNumber = getRandomNumber;