// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) count++;
  }
  return count;
};

// Runtime: 94 ms, faster than 35.17% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 44.1 MB, less than 58.26% of JavaScript online submissions for Find Numbers with Even Number of Digits.