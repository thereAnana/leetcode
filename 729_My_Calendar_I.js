
var MyCalendar = function() {
    this.note = new Array();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    if(!(start||end)){
        return;
    }

    if(this.note.length <= 0){
        this.note.push(start);
        this.note.push(end);
        return true;
    }
    var indleft =0,indright =0;
    for(var i =0;i<this.note.length;i++){
        if(start<this.note[i]){
            ++indleft;
        }
        if(end<=this.note[i]){
            ++indright;
        }
    }
    if(indleft==indright&&indleft%2==0){
        this.note.splice(indleft,0,start,end);
        return true;
    }else{
        return false;
    }
    
};
var aa = new MyCalendar();
console.log(aa.book(10, 20)); 
console.log(aa.book(15, 25)); 
console.log(aa.book(20, 30));
/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */