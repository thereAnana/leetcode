/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.count = 0;
	this.capacity = capacity;
    this.arr = new Array();      
    var countAdd = function(){
        this.count++;
        this.count = this.count >=this.capacity?0:this.count;
    }
    var countMoveTo = function(num){
        if(num < this.capacity){
            this.count = num;
        }else if (num >= this.capacity){
            this.count = num - this,capacity;
        }
    }
    this.countAdd = countAdd;
    this.countMoveTo = countMoveTo;
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
    for(var i = 0;i<this.arr.length;i++){
        if(this.arr[i].key === key){
            this.countMoveTo(i);
            this.countAdd();
            return this.arr[i].value;
        }
    }
    this.countMoveTo(this.arr.length);
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    for(var i =0;i < this.arr.length;i++){
        if(this.arr[i].key == key){
            this.arr[i].value = value;
            this.countMoveTo(i);
            this.countAdd();
            return;
        }
    }

    if(this.arr.length < this.capacity){
        this.countMoveTo(this.arr.length);
    }
    this.arr[this.count] = new struct(key, value);  
    this.countAdd();
};


//[null,null,null,null,null,null,-1,null,19,17,null,-1,null,null,null,-1,null,-1,5,-1,12,null,null,
//3,5,5,null,null,1,null,-1,null,30,5,30,null,null,null,-1,null,-1,24,null,null,18,null,null,null,null,    -1,null,null,18,null,null,-1,null,null,null,null,null,18,null,null,-1,null,4,29,30,null,12,-1,null,null,null,null,29,null,null,null,null,17,22,18,null,null,null,-1,null,null,null,20,null,null,null,-1,18,18,null,null,null,null,20,null,null,null,null,null,null,null]
var ca = new LRUCache (10);
console.log(ca.put(10,13)+"null");
console.log(ca.put(3,17)+"null");
console.log(ca.put(6,11)+"null");
console.log(ca.put(10,5)+"null");
console.log(ca.put(9,10)+"null");
console.log(ca.get(13));
console.log(ca.put(2,19)+"null");
console.log(ca.get(2));
console.log(ca.get(3));
console.log(ca.put(5,25)+"null");
console.log(ca.get(8));
console.log(ca.put(9,22)+"null");
console.log(ca.put(5,5)+"null");
console.log(ca.put(1,30)+"null");
console.log(ca.get(11));
console.log(ca.put(9,12)+"null");
console.log(ca.get(7));
console.log(ca.get(5));
console.log(ca.get(8));
console.log(ca.get(9));
console.log(ca.put(4,30)+"null");
console.log(ca.put(9,3)+"null");
console.log(ca.get(9));
console.log(ca.get(10));
console.log(ca.get(10));
console.log(ca.put(6,14)+"null");
console.log(ca.put(3,1)+"null");
console.log(ca.get(3));
console.log(ca.put(10,11)+"null");
console.log(ca.get(8));
console.log(ca.put(2,14)+"null");
console.log(ca.get(1));
console.log(ca.get(5));
console.log(ca.get(4));
console.log(ca.put(11,4)+"null");
console.log(ca.put(12,24)+"null");//length==9
console.log(ca.put(5,18)+"null");
console.log(ca.get(13));
console.log(ca.put(7,23)+"null");


console.log(ca.get(8));
console.log(ca.get(12));
console.log(ca.put(3,27)+"null");
console.log(ca.put(2,12)+"null");
console.log(ca.get(5));
console.log(ca.put(2,9)+"null");
console.log(ca.put(13,4)+"null");
console.log(ca.put(8,18)+"null");
console.log(ca.put(1,7)+"null");
console.log(ca.get(6));
console.log(ca.put(9,29)+"null");
console.log(ca.put(8,21)+"null");
console.log(ca.get(5));
console.log(ca.put(6,30)+"null");
console.log(ca.put(1,12)+"null");
console.log(ca.get(10));
/*console.log(ca.put(4,15)+"null");
console.log(ca.put(7,22)+"null");
console.log(ca.put(11,26)+"null");
console.log(ca.put(8,17)+"null");
console.log(ca.put(9,29)+"null");
console.log(ca.get(5));
console.log(ca.put(3,4)+"null");
console.log(ca.put(11,30)+"null");
console.log(ca.get(12));
console.log(ca.put(4,29)+"null");
console.log(ca.get(3));
[10],[3,29],[10,28],[1,20],[11,13],
console.log(ca.get(9));
console.log(ca.get(6));
console.log(ca.put(3,4)+"null");
console.log(ca.get(1));
console.log(ca.get(10));
console.log(ca.put(3,29)+"null");
console.log(ca.put(10,28)+"null");
console.log(ca.put(1,20)+"null");
console.log(ca.put(11,13)+"null");
console.log(ca.get(3));
console.log(ca.put(3,12)+"null");
console.log(ca.put(3,8)+"null");
console.log(ca.put(10,9)+"null");
console.log(ca.put(3,26)+"null");
console.log(ca.get(8));
console.log(ca.get(7));
console.log(ca.get(5));
console.log(ca.put(13,17)+"null");
console.log(ca.put(2,27)+"null");
console.log(ca.put(11,15)+"null");
console.log(ca.get(12));
console.log(ca.put(9,19)+"null");
console.log(ca.put(2,15)+"null");
console.log(ca.put(3,16)+"null");
console.log(ca.get(1));
console.log(ca.put(12,17)+"null");
console.log(ca.put(9,1)+"null");
console.log(ca.put(6,19)+"null");
console.log(ca.get(4));
console.log(ca.get(5));
console.log(ca.get(5));
console.log(ca.put(8,1)+"null");
console.log(ca.put(11,7)+"null");
console.log(ca.put(5,2)+"null");
console.log(ca.put(9,28)+"null");
console.log(ca.get(1));
console.log(ca.put(2,2)+"null");
console.log(ca.put(7,4)+"null");
console.log(ca.put(4,22)+"null");
console.log(ca.put(7,24)+"null");
console.log(ca.put(9,26)+"null");
console.log(ca.put(13,28)+"null");
console.log(ca.put(11,26)+"null");
*/
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */