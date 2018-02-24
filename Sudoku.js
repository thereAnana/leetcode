function doneOrNot(board){
  let boa = board;
  let res = ['Finished!','Try again!'];
  let flag = 0;
  for(let i =0;i<9 && flag == 0;i++){
  console.log(i+":"+flag);
    let myRowArr = boa[i];
    isArrRepeat(myRowArr)?flag = 1:flag = 0;
    if(flag === 1) break;
    let myColArr = [];
    for(let j =0;j<9;j++){
      myColArr.push(boa[j][i]);
    }
    isArrRepeat(myColArr)?flag = 1:flag = 0;
    if(flag === 1) break;
    let mySquareArr = [];
    let firstItemLoc = [0,0];
    firstItemLoc[0] = parseInt((i/3))*3;
    firstItemLoc[1] = parseInt((i%3))*3;
    console.log(firstItemLoc)
    for(let m = firstItemLoc[0];m<firstItemLoc[0]+3;m++){
      for(let n = firstItemLoc[1];n<firstItemLoc[1]+3;n++){
        mySquareArr.push(boa[m][n]);
      }
    }
   isArrRepeat(mySquareArr)?flag = 1:flag = 0;
   if(flag === 1) break;
  }
  return res[flag];
  
}
function isArrRepeat(theArr){
 let myArr = theArr.concat();
 let oRes = false;
 oRes = myArr.length === [...new Set(myArr)].length ? false : true;
 console.log(theArr+":"+oRes)
 return oRes;
}