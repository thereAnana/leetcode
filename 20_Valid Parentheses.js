/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    while(s.match(/\(\)|\[\]|\{\}/g)){
        s = s.split('()').join('').split('[]').join('').split('{}').join('');
    }
    return !s;
};