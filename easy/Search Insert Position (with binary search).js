/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if (nums.length == 0 ) return 0;
    
    var n = nums.length;
    var l = 0;
    var r = n - 1;
    
    while (l < r){
        var m = Math.floor((l + r)/2)
        // finds halfway point
        // console.log("L:"+l+" R:"+r+" M:"+m);
        // JavaScript requires floor function
        
        if (nums[m] == target) return m;
        else if (nums[m] > target) r = m; // if nums > target, move right boundary
        else l = m + 1; // if nums < target, move left boundary
    }
    if (nums[l] < target){
        return l+1;
    }
    return l;
};