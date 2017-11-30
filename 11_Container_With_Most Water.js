/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var water = 0;
    var i =0,j =height.length -1;
    while(i<j){
        var h = height[i]<height[j]?height[i]:height[j];
        water = water>(h * (j - i))?water: (h * (j - i));
        while(height[i] <= h&&i<j) i++;
        while(height[j] <= h&&i<j) j--;        
    }
    return water;
};