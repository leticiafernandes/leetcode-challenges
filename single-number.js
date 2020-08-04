/**
  
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

---

result:
Runtime: 304 ms, faster than 12.05% of JavaScript online submissions for Single Number.
Memory Usage: 39.6 MB, less than 28.57% of JavaScript online submissions for Single Number.

---

obs:

this one in my first attempt got real close and then got stuck

had to consult a doubt for the first time :(

well, lets keep on going
  
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let arr = [];
    
    for(i=0; i < nums.length; i++){
      if(!arr.includes(nums[i])){
        arr.push(nums[i]);
      } else {
        arr.splice(arr.indexOf(nums[i]), 1);
      }
    }
      
    return arr[0];
};