/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var arr =[];
    var eachArr =[];
    var flag =0;
    for(var i = left;i<=right;i++){
        eachArr =[];
        flag =0;
        eachArr = i.toString().split("");
        for( var j = 0;j<eachArr.length;j++){
            if(eachArr[j]== 0||i%eachArr[j]!=0){
                flag++;
            }
        }
        if(flag == 0){
            arr.push(i)
        }
    }
    return arr;
};