/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices == []) return 0;
    var left = 0,right = prices.length -1;
    var res = 0;
    while(left < right){

        if( prices[left] < prices[right]){
            res = res>( prices[right] - prices[left])?res:( prices[right] - prices[left]);
        }
        --right;
        if(left == right ){
            ++left;
            right = prices.length -1;
            continue;
        }
    }
    return res ;
};