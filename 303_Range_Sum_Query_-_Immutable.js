/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum =[];
    this.sum.push(nums[0]);
    for(var i =1;i<nums.length;i++){
        this.sum.push(this.sum[i-1]+nums[i]);
    }
    console.log(this.sum);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i==0?this.sum[j]:this.sum[j]-this.sum[i-1];
};