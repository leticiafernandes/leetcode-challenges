/*

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

---

Result:

Runtime: 92 ms, faster than 49.34% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 39.8 MB, less than 75.42% of JavaScript online submissions for Contains Duplicate.

---


this is one that i am not really proud of cause of the sort and if in line 70

in my first attempt i spliced the array in two and love it, code bellow:

var containsDuplicate = function(nums) {
  let half = nums.length/2;
  let x = nums.splice(0,half);
  let j = nums.splice(-half);
  
  for(i=0; i < j.length; i++){
    let curr = j[i];
    
    if(x.includes(curr)){
      return true;
    }
  }
  return false;
};

but that didnt work for cases like:
[1,2,3,4,5,5]

so i solved like this

    ||
    ||
    \/

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let sorted = nums.sort();
      
    for(i=0; i < sorted.length; i++){
      let next = sorted[i+1];
      
      if(!next && nums.length > 1) next = nums[0];
      
      if(sorted[i] === next){
        return true;
      }
    }
    
    return false;
};