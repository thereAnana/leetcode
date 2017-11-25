class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int arrAddCounts=nums1.size() +nums2.size();
        int arr[arrAddCounts];
        int i;
        double res;
        for(i =0;i<arrAddCounts;i++){
           if((!nums1.empty())&&(!nums2.empty())){
                if(nums1[0]<=nums2[0]){
                    arr[i]=nums1[0];        //read first data;
                    nums1.erase(nums1.begin());
                }
                else{
                    arr[i]=nums2[0];
                    nums2.erase(nums2.begin());
                }
            }
            else if(nums1.empty()){
                arr[i]=nums2[0];
                nums2.erase(nums2.begin());
            }
            else if(nums2.empty()){
                arr[i]=nums1[0];
                nums1.erase(nums1.begin());
            }
        }
        if(arrAddCounts%2) {
            res =(arr[(arrAddCounts/2)]);}
        else {
            res =((arr[arrAddCounts/2]+arr[arrAddCounts/2-1])/2.00);
            
        }
        //int y =arr[2];
        return res;
    }
};