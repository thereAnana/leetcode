/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.values = [];
    this.topNum = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.values[this.topNum++] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.values[--this.topNum];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.values[this.topNum-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    console.log(this.topNum)
    var res = this.values[0];
    for(var i =1;i<this.topNum;++i){
        res = res<this.values[i]?res:this.values[i];
    }
    return res;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */