/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    var searching = true;
    var i = 0;
    var neededNum;
    const arr = [0,0]
    
    while (searching){
        
        neededNum = target - nums[i]
        for (let y = i + 1; y < nums.length; y++){
            if (nums[y] == neededNum) {
                arr[0] = i
                arr[1] = y
                return arr;
            }
        }
        i++;
        
    }
};