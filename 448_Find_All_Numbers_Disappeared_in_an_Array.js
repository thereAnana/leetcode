/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a,b)=>a-b);
    nums.unshift(0);
    nums.push(nums.length);
    console.log(nums);
    var res = [];
    for(var i = 1;i<nums.length;++i){
        if(nums[i]-nums[i-1]>1){
            var j = nums[i-1]+1;
            while(j<nums[i]){
                res.push(j);
                j++;
            }
        }
    }
    return res;
};