// 
// TLE
//
//
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//     var biggerSum = nums[0];
//     for(var i =0 ;i<=nums.length;++i){
//         var tempSum = 0;
//         for(var j=i;j<=nums.length;++j){
//             tempSum += nums[j];
//             if(tempSum > biggerSum){
//                 biggerSum = tempSum;
//             }
//         }
//     }
//     return biggerSum ;
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max_sum =nums[0];
    var sum=nums[0];
    for (var i=1;i<nums.length;++i){
    	sum = Math.max(sum+nums[i],nums[i]);
    	max_sum = Math.max(max_sum , sum);	
    }
    return max_sum;
};