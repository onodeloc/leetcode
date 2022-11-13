// 59/21

/**
 * @param {number[]} nums
 * @return {number}
 */


 var removeDuplicates = function(nums) {

    var noRepeat = [nums[0]];
    var currNumsVal = 1;

    for (let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[i - 1]){
            nums[currNumsVal] = nums[i];
            currNumsVal++;
        }
    }

    return currNumsVal;

};