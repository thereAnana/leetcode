/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 2;
    var oneBefore = 2;
    var twoBefore = 1;
    var res = 0;
    for(var i =2 ;i<n;++i){
        res = oneBefore + twoBefore;
        twoBefore = oneBefore;
        oneBefore = res;
    }
    return res; 
};

