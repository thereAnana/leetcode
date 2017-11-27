/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
    var flag =0;
    if(words1.length <words2.length){
        var a = words1;
        words1 = words2;
        words2 = a;
    }
    for( var i =0;i<words1.length;i++){
        for(var j =0;j<pairs.length;j++){
            if(words1[i] ==pairs[j][0]&&words2[i] ==pairs[j][1]){
                flag++;
            }
            if(words2[i] ==pairs[j][0]&&words1[i] ==pairs[j][1]){
                flag++;
            }
        }
        if(words1[i] ==words2[i]){
            flag++;
        }
        console.log(flag)
    }
    if(flag==words1.length){
        return true;
    }else{
        return false;
    }
};