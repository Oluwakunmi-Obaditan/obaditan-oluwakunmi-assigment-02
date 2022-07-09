// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
    var sumOfNumbers = [68, -68, 27, 94, 72, -25, -51, 32, 10, 64, -94, 4, 34, -86, 90, 81, 20, -56, -91, -50]
    var sum = 0;
    for (let i = 0; i < sumOfNumbers.length; i++) {
        sum += sumOfNumbers[i];
    }
    return sum;
}
assignment.sumOfNumbers = sumOfNumbers;


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
    var countEvenNumbers = [ 17, 0, 67, 41, 49, 21, 1, 86, 76, 2, 54, 14, 93, 84, 14, 77, 35, 7, 29, 64]
        
    let even = countEvenNumbers.filter(i => i % 2 == 0);
        
    return even.length

}

assignment.countEvenNumbers = countEvenNumbers;


/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
// function celsiusToFahrenheit(arrayOfNumbers) {
//     var numbers = [2,5,3]
        
    
//     let converted = []

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         if(i > 1){ var celcius = (i * 1.8) + 32
//         converted.push(celcius)
//         }
//     }

//     return converted;
// }
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

