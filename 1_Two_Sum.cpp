class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> res;
        int temp;
        for(int i=0;i<nums.size();i++){
            for(int j =i+1;j<nums.size();j++){
                if (nums[j] ==target -nums[i]){
                    res.push_back(i);
                    res.push_back(j);
                    return res;
                }
            }
        }
    
                    return res;
    //throw new IllegalArgumentException("no two sum solution");
    
    }
};