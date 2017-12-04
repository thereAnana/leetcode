/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var res = [];
    for(var i =0;i<temperatures.length;++i){
        var temp = 0;
        for(var j= i+1;j<temperatures.length;++j){
            if(temperatures[j]>temperatures[i]){
                temp = j -i;
                break;
            }
        }
        res.push(temp);
    }
    return res;
};