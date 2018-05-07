/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    return matrix.join(",").split(",").map((x) => (x >> 0)).sort((a ,b) => (a-b))[k - 1];
};