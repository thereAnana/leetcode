/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var res = 0;
    var map = new Map();
    for (var n in  nums) {
        if (!map.has(nums[n])) {
            
            var left = (map.has(nums[n] - 1)) ? map.get(nums[n] - 1) : 0;
            var right = (map.has(nums[n] + 1)) ? map.get(nums[n] + 1) : 0;
            // sum: length of the sequence n is in
            var sum = left + right + 1;
            map.set(nums[n], sum);
            // keep track of the max length 
            res = Math.max(res, sum);
            
            // extend the length to the boundary(s)
            // of the sequence
            // will do nothing if n has no neighbors
            map.set(nums[n] - left, sum);
            map.set(nums[n] + right, sum);
        }
        else {
            // duplicates
            continue;
        }
    }
    return res;
        
    };