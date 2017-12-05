/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    var letterBox= [" ","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    var res = [];
    var getCycleRes = function(str){
        if(str.length>0){
            if(str.length == 1){
                res  = letterBox[parseInt(str)].split("");
            }else{
                getCycleRes(str.substr(0,str.length-1));
                var temp  =res;
                var ocharArr =  letterBox[parseInt(str.charAt(str.length-1))].split("");
                res = [];
                for(var i = 0;i<temp.length;++i){
                    for(var j =0;j<ocharArr.length;++j){
                        res.push(temp[i]+""+ocharArr[j])
                    }
                }
                console.log(res);
            }
        }
    }
    getCycleRes(digits);
    return res;
};
console.log(letterCombinations("22"));
