/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return BinS(nums,0,nums.length-1,target);
};
var BinS = function(arr,left, right,store){
    let res;
    if (store <= arr[left]&& left == 0 ) {console.log(1);res = left;}
    else if (store >= arr[right]&& right ==(arr.length -1)) {console.log(2);res = right;}
    else if(right - left <= 1){ console.log(left,right);res = left;}
    else{
        let mid = left +Math.floor((right -left)/2);
        if(store >= arr[mid] ){ console.log(4);res = BinS(arr,mid,right,store);}
        else{ console.log(5);res = BinS(arr,left,mid-1,store);}
    }
    return res; 
}
console.log(searchInsert([1,3,5,6],2));