    
    public int findCircleNum(int[][] M) {
        int[] visited = new int[M.length];
        int count = 0;
        for (int i = 0; i < M.length; i++) {
            if (visited[i] == 0) {
                dfs(M, visited, i);
                count++;
            }
        }
        return count;
    }
/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    var visited = new Array(M.length);
    var count = 0;
    for (var i = 0;i<M.length;++i){
        if(visited[i] == undefined){
            dfs(M, visited, i);
            count++;
        }
    }
    return count;
};
var dfs = function(M,visited, i){
    for(var j =0; j<M.length; j++){
        if(M[i][j] == 1 && visited[j] == undefined){
            visited[j] = 1;
            dfs(M, visited, j);
        }
    }
}