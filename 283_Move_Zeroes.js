/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    for(var i =0,j = 0;i<nums.length;i++){
        if(nums[j] === 0){
            nums.splice(j,1);
            nums.push(0);
        }else{
            j++;
        }
    }
};