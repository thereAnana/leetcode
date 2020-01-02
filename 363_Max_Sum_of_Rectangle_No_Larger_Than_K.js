/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    let height = matrix.length();
    if(height == 0) return 0;
    let width = matrix[0].length();
    let res = 0;
    for(let i = 0; i < width;i++){
        let sums =[...Array(height).fill(0)];
        for(let j = 0; j<width; j++){
            for(let row = 0; row<height; row++){
                sums[row] += matrix[row][j];
            }
            let ms = maxSumArray(sums, k);
            if(ms == k) return ms;
            if(ms < k && ms >res) res = ms;
        } 
    }
    return res;
};
var maxSumArray = function(arr, k){
    let sum = 0, maxSum = 0;
    for(let i = 0; i < arr,length(); i++){
        sum += arr[i];
        maxSum = Math.max(sum, maxSum);
        if (sum == k) return sum;
        if (sum < 0) sum = 0;
    }
    if (maxSum <= k) return maxSum;
    max


    if (maxS <= k) return maxS;
    maxS= INT_MIN;
    set<int>sums;
    sum = 0;
    sums.insert(0);
    for (int i = 0; i < arr.size(); i++) {
        sum += arr[i];
        auto it = sums.lower_bound(sum - k);
        if (it != sums.end()) maxS = max(sum - *it, maxS);
        sums.insert(sum);
    }
    return maxS;
}


// int maxSumSubmatrix(vector<vector<int>>& matrix, int k) {
//     int m=matrix.size();
//     if(m==0) return 0;
//     int n=matrix[0].size();
//     int res=INT_MIN;
//     for(int i=0;i<n;i++) {  // the number of columns is smaller
//         vector<int> sums(m,0);
//         for(int j=i;j<n;j++) {
//             for(int row=0;row<m;row++) {
//                 sums[row]+=matrix[row][j];
//             }
//             int ms = maxSumArray(sums, k);
//             if (ms == k) return ms;
//             if (ms < k && ms > res) res = ms;
      
//         }
//     }
//     return res;
// }
 
int maxSumArray(vector<int> & arr, int k) {
    int sum = 0, maxS = INT_MIN;
    for (int i = 0; i < arr.size(); i++) {  //it's a trick. Maybe O(n) to solve this problem
        sum += arr[i];
        maxS = max(sum, maxS);
        if (sum == k ) return sum;
        if (sum < 0) sum = 0;
    }
    if (maxS <= k) return maxS;
    maxS= INT_MIN;
    set<int>sums;
    sum = 0;
    sums.insert(0);
    for (int i = 0; i < arr.size(); i++) {
        sum += arr[i];
        auto it = sums.lower_bound(sum - k);
        if (it != sums.end()) maxS = max(sum - *it, maxS);
        sums.insert(sum);
    }
    return maxS;
}  