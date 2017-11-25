//Encode and Decode TinyURL
function Map(){
    var struct = function(key,value){
        this.key = key;
        this.value = value;
    };
    var put = function(key, value){
        for(var i =0;this.arr.length;i++){
            if(this.arr[i].key == key){
                this.arr[i].value = value;
                return; 
            }
        }
        this.arr[this.arr.length] = new struct(key, value);  
    };
    var get  = function(key){
        for(var i = 0;this.arr.length;i++){
            if(this.arr[i].key === key){
                return this.arr[i].value;
            }
        }
    };
    var remove = function(key){
        // var item;
        // for(var i =0;this.arr.length;i++){
        //     item = this.arr.pop()
        //     if(item.key === key){
        //         continue; 
        //     }
        //     this.arr.unshift(v);
        // }
        for(var i =0;this.arr.length;i++){
            if(this.arr[i].key === key){
                this.arr.splice(i,1);
            } 
        }
    };
    var size  = function(){
        return this.arr.length;
    };
    var isEmpty = function(){
        return this.arr.length==0?true:false;
    };
     this.arr = new Array();  
     this.get = get;  
     this.put = put;  
     this.remove = remove;  
     this.size = size;  
     this.isEmpty = isEmpty;  
}
var map = new Map();
var encode = function(longUrl) {
    var theKey = Date.now().toString(36);
    theKey =  "http://tinyurl.com/" + theKey;
    map.put(theKey, longUrl);
    return theKey;

};
var decode = function(shortUrl) {
    return map.get(shortUrl);

};



/**
* Decodes a shortened URL to its original URL.
*
* @param {string} shortUrl
* @return {string}
*/


/**
* Your functions will be called as such:
* decode(encode(url));
*/