// Runtime: 3 ms, faster than 75.13% of Java online submissions for Product of Array Except Self.
// Memory Usage: 58.1 MB, less than 20.87% of Java online submissions for Product of Array Except Self.

class Solution {
    public int[] productExceptSelf(int[] nums) {
        
        // return product of all other numbers in array except self
        // must be in O(n) time...
        // each number must be kept track of iteratively
        // cannot use division operator (we can cheat that)
        
        // if one zero, answer during zero is product
        // if two zero, return arr of 0's
        
        int total = 1;
        boolean oneZero = false;
        boolean twoZero = false;
        
        for (int i = 0; i < nums.length; i++){
            if (nums[i] == 0){
                if (oneZero){
                    twoZero = true;
                    i = nums.length; // bootleg loop exit
                }
                oneZero = true;
            } else {
                total *= nums[i];
            }
        }
        
        for (int i = 0; i < nums.length; i++){
            
            if (twoZero){
                nums[i] = 0;
            } else if (oneZero){
                if (nums[i] != 0){
                    nums[i] = 0;
                } else {
                    nums[i] = total;
                }
            } else {
                nums[i] = total/nums[i];
            }
        }
        
        return nums;
    }
}