/**
 * @param {number[]} asteroids
 * @return {number[]}
 */



var asteroidCollision = function(asteroids) {
    var res =[];
    for (var i = 0;i< asteroids.length;i++){
        if(asteroids[i] > 0){//>0时，直接添加
            res.push(asteroids[i]);
        }
        else if (res.length == 0 || res[res.length-1] <  0){// 第一个负数 ，直接添加
            res.push(asteroids[i]);
        }
        else if (res[res.length-1] <=  -asteroids[i]){//1.绝对值前一个比当前的大或相等2.两个为异号
            if(res[res.length-1] < -asteroids[i]) i--;//返回前一个位置
            res.pop();//删除当前
        }
    }
    return res;
}