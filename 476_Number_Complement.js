var findComplement = function(num) {
    //console.log(num.toString(2).replace(/1/g,"0").replace(/0/g,"1"));
    return parseInt(num.toString(2).replace(/1/g,"3").replace(/0/g,"1").replace(/3/g,"0"),2);
};