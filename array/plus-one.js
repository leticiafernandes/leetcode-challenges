// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]
 

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9


/**
 result: 
    Runtime: 76 ms, faster than 65.53% of JavaScript online submissions for Plus One.
    Memory Usage: 38.6 MB, less than 5.96% of JavaScript online submissions for Plus One.
  
    it was a good resolution by i'll try another approach with:
    [1,9,9]

    9+1 = 10

    0

    9+1

    0

    2
 */

 /**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = BigInt(digits.join(''))+BigInt(1)

    return digits.toString().split('').map(e => parseInt(e))
};