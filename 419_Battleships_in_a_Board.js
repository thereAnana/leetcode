/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
     if(board.length ==0) return 0;
     var count = 0;
     for(var i = 0;i<board.length;++i){
         for(var i = 0;j<board[0].length;++j){
             if(board[i][j] == '.'|| (i>0&&(board[i-1][j] == 'X') )||(j > 0 && board[i][j-1] == 'X')) continue;
             count++;
         }
     }
     return count;
};