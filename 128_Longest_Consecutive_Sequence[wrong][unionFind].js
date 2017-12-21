/**
 * @param {number[]} nums
 * @return {number}
 */
var id = [];
var sz = [];
var map = new Map();
var longestConsecutive = function(nums) {
    id = new Array(nums.length);
    sz = new Array(nums.length);
    for(var i = 0;i<nums.length;++i){
        insert(nums[i],i);
    }
    var res = 0;
    for(var j = 0;j<nums.length;++j){
        res = Math.max(res,sz[i]);
    }
    return res;
};
var insert = function(num, index){
    if (!map.has(num)) {
        map.set(num, index);
        id[index] = index;
        sz[index] = 1;
        if (map.has(num - 1)) {
            unite(num - 1, num);
        }
        if (map.has(num + 1)) {
            unite(num + 1, num);
        }
    }
}
var unite  = function(num1,num2){
    var p = findSet(map.get(num1));
    var q = findSet(map.get(num2));
    if (p != q) {
        if (sz[p] > sz[q]) {
            id[q] = p;
            sz[p] += sz[q];
        } else {
            id[p] = q;
            sz[q] += sz[p];
        }
    }
}
var findSet = function(p){
    if (id[p] != p) {
        id[p] = findSet(id[p]);
    }
    return id[p];
}
