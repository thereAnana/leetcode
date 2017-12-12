
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function( nums,n = 0 ){
    if( n >= nums.length) return [[]];
    const res = [];
    const prevs = permute(nums, n + 1);
    for(let prev of prevs){
        for(let i = 0;i <= prev.length;++i){
            let p = prev.slice(0)//just return result , if want change array use splice
            p.splice(i, 0, nums[n]);
            res.push(p);
        }
    }
};
//const:[read-only]must specify its value in the same statement in which it
//let:declares a block scope local variable