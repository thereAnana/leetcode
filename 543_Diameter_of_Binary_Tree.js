/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var depth =  function(node){
    if(node == null){
        return 0;
    }
    var depth_left = depth(node.left);
    var depth_right = depth(node.right);
    return 1 +(depth_left>depth_right?depth_left:depth_right);
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if( root == null){
        return 0;
    }
    var res = 0;
    var dl = diameterOfBinaryTree(root.left);
    var dr = diameterOfBinaryTree(root.right);
    var dia = depth(root.left) +depth(root.right);
    var temp = dl>dr?dl:dr;
    res = temp>dia?temp:dia;
    return res;

};
