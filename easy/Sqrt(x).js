// 27/63

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    var i = 0;

    if (x === 0){
        return 0;
    } else if (x < 4){
        return 1;
    }

    for (i = 0; i < x; i++){
        if (i * i === x){
            return i;
        } else if (i * i > x){
            return i - 1;
        }
    }
};