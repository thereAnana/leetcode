/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    this.num = num;
    this.myArr=[];
        for(var i =0 ;i<= this.num;i++){
            console.log("|"+i.toString(2).replace(/0/g,"")+"|");
            this.myArr.push(i.toString(2).replace(/0/g,"").length);
        }
    return this.myArr;

};
console.log(countBits(5));