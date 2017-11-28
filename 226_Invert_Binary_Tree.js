/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null){
        return null;
    }
    var curnode = new TreeNode(root.val);
    curnode.left = invertTree(root.right);
    curnode.right = invertTree(root.left);
    return curnode;
};