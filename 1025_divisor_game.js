/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    let dp = [];
    dp.length = N+1;
    dp[1] = false;
    dp[2] = true;
    for(let i = 3; i <=  N ; i++){
        dp[i] = false;
            for(let j = 1; j <=  i; j++){
                if (i % j === 0 && dp[i-j] === false){
                     dp[i] = true;
                     break;   
                }
            }
    }
    return dp[N];
};