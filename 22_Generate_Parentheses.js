
/**
 * @param {number} n
 * @return {string[]}
 */
var generateOneByOne = function(sublist, list, left, right){ 
    if(left > right){
        return;
    }
    if(left > 0){
        generateOneByOne( sublist + "(" , list, left-1, right);
    }
    if(right > 0){
        generateOneByOne( sublist + ")" , list, left, right-1);
    }
    if(left == 0 && right == 0){
        list.push(sublist);
        return;
    }
}
var generateParenthesis = function(n) {
    var res = [];
    generateOneByOne("", res, n, n);
    return res;
};

