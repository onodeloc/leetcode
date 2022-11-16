// 64/50

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    // large integer
    // represented as array
    // 0-n = total num

    var remainder = false;

    for (let i = digits.length - 1; i >= 0; i--){

        digits[i] = digits[i] + 1;
        remainder = false;

        if (digits[i] === 10){
            digits[i] = digits[i] - 10;
            remainder = true;
        } else {
            return digits;
        }

        if (i === 0 && remainder){
            digits.unshift(1);
        }
    }

    return digits;
};