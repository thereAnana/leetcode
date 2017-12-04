/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var generatepreorderString = function(node){
    var str = "";
    var travel = function(onode){
        if(onode){
                str +=(","+onode.val);
                travel(onode.left);
                travel(onode.right);
        }else{
           str += ",#" 
        }

    }
    travel(node);
    return str;
};
var isSubtree = function(s, t) {
    var str = "";
    var wholeStr = generatepreorderString(s); 
    var subStr = generatepreorderString(t);
    console.log(subStr);
    console.log(wholeStr);
    console.log(wholeStr.indexOf(subStr));
    return wholeStr.indexOf(subStr)>-1?true:false;
};
