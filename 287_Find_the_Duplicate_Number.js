/**
 * @param {number[]} nums
 * @return {number}
 */
var sortNum =(a,b) => a- b;
var findDuplicate = function(nums) {
    nums.sort(sortNum);
    for(var i = 0;i<nums.length;++i){
        if(nums[i] == i){
            return i;
        }
    }
};