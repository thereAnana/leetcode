/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var res =[];
    var max = 1;
    var zeroCount = 0;
    for(var i = 0;i<nums.length;++i){
        if(nums[i]!==0){
            max *= nums[i];
        }else{
            zeroCount++;
        }
    }
    
    for(var j =0;j<nums.length;j++){
        if(nums.length-zeroCount ==1&&nums[j]!=0){
            res.push(0);
        }else{
            res.push(zeroCount>=1?(nums[j]==0?(zeroCount>1?0:max):0):max/nums[j]);
        }
    }
    return res;
};