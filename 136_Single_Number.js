/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    while( nums.length>0 ){
        for(var i =1;i<nums.length;++i){
            if( nums[0] === nums[i] ){
                nums.splice(i,1);
                nums.splice(0,1);
                i = 0;
                break;
            }  
        }
        if(i === nums.length){
            return nums[0];
        }

    }
};