// 75/60

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    // a set here will remove duplicates
    var noRepeat = new Set(nums);

    // then we can compare the SIZE of the set against the LENGTH of the array
    if (nums.length !== noRepeat.size){
        return true;
    }
    return false;

};