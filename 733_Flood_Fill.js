/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var pointColor = function(image,x,y,targetColor,newColor){
        if( x>=image.length || x<0 || y>=image[1].length || y<0 || image[x][y] != targetColor){
            return;
        }else{
            image[x][y] = newColor;
            pointColor( image, x + 1, y, targetColor, newColor);
            pointColor( image, x - 1, y, targetColor, newColor);
            pointColor( image, x, y + 1, targetColor, newColor);
            pointColor( image, x, y - 1, targetColor, newColor);

        }
    }
    this.pointColor = pointColor;
    if(image[sr][sc] != newColor){
        this.pointColor(image,sr,sc,image[sr][sc],newColor);        
    }
    return image;
    
};