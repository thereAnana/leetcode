/**
 * @param {number[][]} people
 * @return {number[][]}
 */
function sortNumber ( a,b ) {
    return a[0] ===b[0]?a[1]-b[1]:b[0]-a[0];
}
var reconstructQueue = function ( people ) {
    let res =[];
    people.sort( sortNumber );
    for(let i = 0;i<people.length;++i){
        res.splice(people[i][1],0,people[i]);
    }
    return res;
};