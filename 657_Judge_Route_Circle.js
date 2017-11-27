/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var arr = moves.split("");
    pos =[0,0];
    for(var i =0 ;i<arr.length;i++){
        arr[i]=="U"?pos[0]++:(arr[i]=="D"?pos[0]--:(arr[i]=="L"?pos[1]--:(arr[i]=="R"?pos[1]++:arr = arr)))
    }
    if(pos[0]==0&&pos[1]==0){
            return true;
        }else{
            return false;
        }
};