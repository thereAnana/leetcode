/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var arr = (x ^ y).toString(2).split("1") 
        return arr == 0 ? 0:arr.length-1;
    
};