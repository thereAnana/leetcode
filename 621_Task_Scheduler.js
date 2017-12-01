
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    var l=tasks.length;
    if(l<=1) return l;
    var  count = new Array(26);
    for(var i=0;i<l;i++) {
        count[tasks[i].charCodeAt() - 65]?count[tasks[i].charCodeAt() - 65]++:count[tasks[i].charCodeAt() - 65] = 1;
    }
    var sortNum = function (a,b){
        return b -a;
    }
    count.sort( sortNum );
     console.log(count);   

    var  max = count[0];
    console.log(max);
    var total = 0;
    for(var i=1;i<26;i++){
        if(count[i]!=max) break;
        total++;
    }
    console.log(total+""+max+""+n)
    return (n+1)*max-n+total >l?(n+1)*max-n+total : l;
}