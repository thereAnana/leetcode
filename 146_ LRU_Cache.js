/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.count = 0;
	this.capacity = capacity;
    this.arr = new Array();
    this.order = new Array(capacity);   
    var getLeastUse = function(){
        var res = 0;

        for(var i =1;i<this.order.length;++i){
            res = this.order[res]<this.order[i]?res:i;
        }
        return res;
    };
    this.getLeastUse = getLeastUse; 
    // var countAdd = function(){
    //     this.count++;
    //     this.count = this.count >=this.capacity?0:this.count;
    // }
    // var countMoveTo = function(num){
    //     if(num < this.capacity){
    //         this.count = num;
    //     }else if (num >= this.capacity){
    //         this.count = num - this,capacity;
    //     }
    // }
    // this.countAdd = countAdd;
    // this.countMoveTo = countMoveTo;
};
var struct = function(key,value){
    this.key = key;
    this.value = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    this.count++;
    for(var i = 0;i<this.arr.length;i++){
        if(this.arr[i].key === key){
            this.order[i] = this.count;
            return this.arr[i].value;
        }
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.count++;
    var loc = 0;
    for(var i =0;i < this.arr.length;i++){
        if(this.arr[i].key == key){
            this.arr[i].value = value;
            this.order[i] = this.count;
            return;
        }
    }

    if(this.arr.length < this.capacity){
        loc = this.arr.length;
    }else{
        loc = this.getLeastUse();
    }
    this.arr[loc] = new struct(key, value); 
    this.order[loc] = this.count;
};