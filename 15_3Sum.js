/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    //nums.sort();
 //js排序不是按数字排序而是ascii排序的；要处理一下
    var insertSort = function(array){
        var i = 1, j, temp, key, len = array.length; 
        for(; i < len; i++){ 
            temp = j = i; key = array[j];
            while(--j > -1){ 
                if(array[j] > key){ array[j+1] = array[j]; }
                else{ break;} 
            }
            array[j+1] = key; 
        }
        return array; 
    }
    nums = insertSort(nums);
    var res = [];
    for(var i = 0;i<nums.length-2;i++) {
        if (i == 0 || (i > 0 && nums[i] != nums[i-1])){
            var left = i + 1;
            var right = nums.length -1; 
            var sum = -nums[i]; 
            while(left < right){
                if(nums[left] + nums[right] == sum){
                    res.push([nums[i],nums[left],nums[right]]);
                    while (left < right && nums[left] == nums[left+1]) left++;
                    while (left < right && nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                }else if(nums[left] + nums[right] < sum) left++;
                else right--;
            }
        }
    }
    return res;
}




//
//first try:result TLE
//
// var threeSum = function(nums) {
//     var res=[];
//     for (var i =0; i <nums.length -2; i++){
//         var target = -nums[i];
//         for(var front =i +1,end =i+2;front<nums.length-1||end<nums.length;end++){
//             if(end ==nums.length){
//                 front++;
//                 end = front;
//             }else{
//                 if(nums[front]+nums[end]==target){
//                     res.push([nums[i],nums[front],nums[end]])
//                 }                
//             }

//         }
        
//     };
//     var dealRepeatArr = function(){
//         var myMinMaxArr =[];
//         for(var ki =0;ki<res.length;ki++){
//             var myMaxNum = res[ki][0]>=res[ki][1]?(res[ki][0]>=res[ki][2]?res[ki][0]:res[ki][2]):(res[ki][1]>=res[ki][2]?res[ki][1]:res[ki][2]);
//             var myMinNum = res[ki][0]<=res[ki][1]?(res[ki][0]<=res[ki][2]?res[ki][0]:res[ki][2]):(res[ki][1]<=res[ki][2]?res[ki][1]:res[ki][2]);
//             myMinMaxArr.push([myMinNum,myMaxNum]);
//         }
//         var myres =[];
//         for( var ki =0; ki<myMinMaxArr.length;ki++){
//             if(ki == 0){
//                 myres.push(res[ki]);
//                 continue;
//             }else{
//                 var flag =0;
//                 for(var n =0;n<ki;n++){
//                     if(myMinMaxArr[n][0]==myMinMaxArr[ki][0]&&myMinMaxArr[n][1]==myMinMaxArr[ki][1]){
//                         flag++;
//                     }  
//                 }
//                 if(flag==0){
//                     myres.push(res[ki]);
//                 }
               
//             }
//         }
//         return myres;
//     }
//     this.dealRepeatArr = dealRepeatArr;
//     return this.dealRepeatArr();
// };




console.log(threeSum([-4,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
