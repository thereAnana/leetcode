/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result =[];    
    var com = 0;
    var getSubsets = function(list, start){
        //console.log(com++,list,result)
         let temp = new Set(list);
        result.push(Array.from(temp));
        for(let i = start;i<nums.length;i++){
            temp.add(nums[i])
            getSubsets(temp, i+1 );
            temp.delete(nums[i]);
            
        }
        
    }
    nums.sort((a,b)=>{a-b});
    getSubsets([],0)
    return result;  
};

  // console.log(subsets([1,2,3]))