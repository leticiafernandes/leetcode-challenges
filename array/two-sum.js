/*
problem:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

	Given nums = [2, 7, 11, 15], target = 9,

	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
*/

/* 
my notes:
	- response status:
		Runtime: 84 ms, faster than 64.11% of JavaScript online submissions for Two Sum.
        Memory Usage: 40.1 MB, less than 7.16% of JavaScript online submissions for Two Sum.

        get better i wll **read in yoda's voice**
        
        REFACTOR EDITION - im back
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let elem = new Map();
    for (var i = 0; i < nums.length; i++) {
      elem.set(nums[i], i);
    }
    
    for (var i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      
      let diffElement = elem.get(diff);
      
      if(diffElement && i != diffElement){
        return [i, diffElement]
      }
    }
};