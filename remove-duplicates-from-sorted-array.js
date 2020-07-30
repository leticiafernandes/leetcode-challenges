/*

challenge number 2

was a bit tricky for me to percept that when the number is duplicated i must not increment the i

result:
Runtime: 104 ms, faster than 53.83% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 38.4 MB, less than 99.09% of JavaScript online submissions for Remove Duplicates from Sorted Array.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(i=0; i < nums.length; i++){     
        if(nums[i] === nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
    
    return nums.length;
};