/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    var min = 1000;
    var max = 0;
    var minP;
    var maxP;
    var toggle = true;
    
    if (target < nums[0]){
        return 0;
    }
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == target){
            return i;
        }
        else{
            if (nums[i] < target){
                min = nums[i];
                minP = i;
            }
            if ((nums[i] > target)&&(toggle)){
                max = nums[i];
                maxP = i;
                toggle = false;
            }
        }
    }
    console.log(minP)
    return minP + 1
};