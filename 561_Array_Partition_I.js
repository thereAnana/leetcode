//评论区的代码，记一下
// var arrayPairSum = function(nums) {
//     return nums.sort((a, b) => a - b)
//                .filter((ele, index) => index % 2 == 0)
//                .reduce((prev, current) => prev + current, 0);
// }

var arrayPairSum = function(nums) {
    var arr = nums.sort((x,y) => x - y);
   //console.log(arr);
   let sum  = 0;
   for(var i =0;i<arr.length;i+=2){
       sum += arr[i];
   }
   return sum;
}
    