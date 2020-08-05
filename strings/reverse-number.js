/*

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

---

result:

Runtime: 124 ms, faster than 17.01% of JavaScript online submissions for Reverse Integer.
Memory Usage: 38 MB, less than 7.79% of JavaScript online submissions for Reverse Integer.

---

obs: 

didnt really like the results either :(

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let splited = String(x).split('');
    let negative = splited[0] === '-' ? splited.splice(0,1) : "";
    let reversed = [];
    let limit = negative ? (Math.pow(2, 31)-1)*-1 : Math.pow(2, 31)-1;
    let res;
    
    for(i=splited.length-1; i >= 0; i--){
      reversed.push(splited[i]);
    }
  
    if (negative){ reversed.unshift(negative) }
    
    res = Math.abs(reversed.join(''));
    
    return res > Math.pow(2,31)-1 ? 0 : negative ? -res : res;
};
