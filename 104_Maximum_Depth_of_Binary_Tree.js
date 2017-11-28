/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
        
        if (root == null){
            return 0;
        }
        var dl = maxDepth(root.left);
        var dr = maxDepth(root.right);
        return dl>=dr?dl+1:dr+1;
    
};
