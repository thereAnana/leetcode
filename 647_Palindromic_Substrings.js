
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var  count = 0;
    for(var  i = 0; i < s.length; i++)
        for(var j = i; j < s.length; j++)
            if(isPanlindrome(s.substr(i, j - i + 1))) count++;
    return count;
};
/**
 * @param {array} arr
 * @param {number} front
 * @param {number} end
 */
var isPanlindrome =  function(str){
    var i = 0, j = str.length - 1;
    var arr = str.split("");
    while(i < j) if(arr[i++] != arr[j--]) return false;
    return true;
}
console.log(countSubstrings("abc"));