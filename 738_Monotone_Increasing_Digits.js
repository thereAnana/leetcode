 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    
    var nums = N.toString().split("");
    for(var i = 0;i<nums.length;++i){
        var j = i+1;
        if(nums[i]>nums[j]){
            var temp = []
            for(var k = 0;k<nums.length;++k){
                if(k<i){
                    temp.push(nums[k]);
                }else if(k==i){
                    temp.push(nums[k]-1>=0?nums[k]-1:0);

                }else if(k >i){
                    temp.push(9);
                }
            }
            console.log(temp)
            var tem = 0;
            tem = monotoneIncreasingDigits(temp.join(""));
            nums = tem.toString().split("");
        }
        
    }
    return parseInt(nums.join(""));
};