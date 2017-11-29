/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var numsSorted=[];
    numsSorted.push([nums[0],1]);
    for(var i =1;i<nums.length;++i){
        var flag = 0;
        for(var j =0;j<numsSorted.length;++j){
            if(nums[i] === numsSorted[j][0]){
                numsSorted[j][1]++;
                flag++;
                break;
            }
        }
        if(flag === 0){
            numsSorted.push([nums[i],1]);
        }
    }
    var sortNumber = function(a,b){
        return b[1]-a[1];
    }
    numsSorted.sort(sortNumber);
    var res= [];
    for(var i= 0;i<k;++i){
        res.push(numsSorted[i][0]);
    }
    return res;

};