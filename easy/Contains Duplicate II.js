// 37/43
// first try!

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    
    // array nums
    // integer k

    // if there are two different indices, such that:
    // nums[i] == nums[j] (duplicate element)
    // and abs(i - j) <= k (is the difference between the nums k or less?)

    // difference between contains duplicate 1 is that we need to find the indices
    // we need to check EVERY pair
    // hashmap solution, check key vals on collision, replace key

    var numsHash = {}; 
    // create hash, we'll add nums[i] (current val) during each iteration
    // on collision, we can compare against k
    // if it's greater, we can replace current hash (since old val is obsolete)


    for (let i = 0; i < nums.length; i++){
        if (nums[i] in numsHash){ // if in hash, check k
            if (i - numsHash[nums[i]] <= k){ // if larger than k, replace
                return true;
            }
            numsHash[nums[i]] = i;
        } else {
            numsHash[nums[i]] = i; // set the value to the index, set key to current iteration
        }
    }
    return false;
};