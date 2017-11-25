/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        return myNodeC(nums,0,nums.size()-1);
        
    }
    TreeNode* myNodeC( vector<int>& nums , int left , int right){
        if(left>right){
            return NULL;
        }
        int maxInd = left;
        for(int i =left;i<= right;i++ ){
            if(nums[i]>nums[maxInd]){
                maxInd = i;
            }
        }
        TreeNode* root = new TreeNode(nums[maxInd]);
        root->left =  myNodeC(nums,left,maxInd-1);
        root->right =  myNodeC(nums,maxInd+1,right);
        return root;
    }

};