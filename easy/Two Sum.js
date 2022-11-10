// 26/97

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums.includes(target - nums[i]) && (nums.indexOf(target - nums[i]) !== i)){
            return [i, nums.indexOf(target - nums[i])];
        }
    }
};