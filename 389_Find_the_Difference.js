/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s ==""){ return t;}
    var arrs = s.split("");
    var arrt = t.split("");
    arrs.sort();
    arrt.sort();
    for(var i =0;i<arrs.length;++i){
    if(arrs[i] != arrt[i]){
return arrt[i];
}
    }
    return arrt[arrt.length -1];
};