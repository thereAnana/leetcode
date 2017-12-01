var sortNum = (a,b) => a-b;
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var arr = [];
    for(var i =0 ;i<nums.length;i++){
        arr.push(nums[i])
    }
    nums.sort(sortNum);
    //console.log(nums)
    //console.log(arr)
    var res = 0;
    for(var i = 0,j = nums.length-1;i<=j;){
        //console.log(i+"|"+j);
        //console.log(nums[i]+"|"+arr[i]+"|"+nums[j]+"|"+arr[j])
        if(nums[i] == arr[i]) ++i;
        if(nums[j] == arr[j]) --j;
        if(nums[i] != arr[i]&& nums[j] != arr[j]){
            
            res = j - i +1;
            break;
        }
    }

     return res ;
};
