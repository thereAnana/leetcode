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
 //worong 
// Input:[2,1,3]
//Output:[25,26,23]
//Expected:[5,6,3]
// let curNum = 0;
// var setnum   = function (nn){
//     curNum  = nn;
// }
// var convertBST = function(root) {
//     if (!root) return;
//     if (root.right) root.right = convertBST(root.right);
//     console.log(root.val+"|")
//     console.log(curNum);
//     var temp =  parseInt(root.val);
//     root.val = 0;
//     root.val = temp + parseInt(curNum);
//     setnum(root.val)
//     console.log(curNum);
//     if (root.left) root.left = convertBST(root.left);
//     return root;
// };
// console.log(curNum);

//second try
var convertBST = function(root) {
    var travel = function(node){
        if (node != null){ 
            if (node.right) travel(node.right);
            node.val = node.val + curNum;
            curNum = node.val;
            if (node.left) travel(node.left); 
        }
        
    };
    var curNum = 0;
     travel(root);
    return root;
};
