/**
 * 
 * Problem:
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
    Example 1:

    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]


    result:
    Runtime: 116 ms, faster than 35.09% of JavaScript online submissions for Rotate Array.
    Memory Usage: 37.8 MB, less than 23.66% of JavaScript online submissions for Rotate Array.

    obs:
    took me a little while to realize that i had to iterate over the k and not array's length
    maybe i was tired cause when i tried with an fresh mind it was quick
 * 
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let count = 0;
    let arr = [];
    for(i=k; i > 0; i--){
        let curr = nums.pop();
        nums.unshift(curr);
    }
};