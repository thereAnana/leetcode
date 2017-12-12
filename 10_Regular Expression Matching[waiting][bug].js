var islastReg = function(str,regStr){
    var res = false;
    if(str.length>1){
        res = isMatch(str.slice(0),regStr);
        if(res == true) return res;
        res = islastReg(str.slice(1),regStr);
    }
    return res;
}
var isMatch = function(s, p) {
var tar = "";

//     if(arrTemp.length === 1&&p.length>s.length){
//         return false;
//     }
var inds = 0,indp = 0,stop;
var count = 0;
console.log(s.length+"length"+p.length)
while(inds <s.length&&indp <p.length){
    var flag = p[indp];
    if(flag !="*"){
        tar = flag;
    }
    console.log(tar+":"+s[inds])
    if(tar === s[inds] ||tar === "."){
        count++;
        console.log("suc");
        flag ==="*"?inds++:inds++,indp++;
    }else{
        indp++;
    }
}
console.log(count+"|"+s.length+"|"+indp+"|"+p.length);

if(indp< p.length){
    if(islastReg(s,p.slice(indp))){
        indp = p.length;
    }
}
return count === s.length&&indp ==p.length ;
}
