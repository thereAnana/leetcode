/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var count=0;
    for(var i=0;i<nums.length;i++){
        var sum=nums[i];
        if(sum==k){
            count++;
        }
        for(var j=i+1;j<nums.length;j++){
            sum+=nums[j];
            if(sum==k) count++;
        }
    }
    return count;
};