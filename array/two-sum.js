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
	- first challenge in my algorithm studies
	- choose js because is my focus now
	- response status:
		Runtime: 220 ms, faster than 12.97% of JavaScript online submissions for Two Sum.
		Memory Usage: 37.3 MB, less than 29.26% of JavaScript online submissions for Two Sum.

		get better i wll **read in yoda's voice**
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i=0; i < nums.length; i++){
        current = nums[i];
        
        for(n=nums.length-1; n > 0; n--){
            if (n === i) break;
            
            result = current + nums[n];
            
            if(result === target) {
                return [i, n];
            }
        }
    }
};