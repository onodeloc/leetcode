import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        //given array nums
        //return true if a value appears twice
        //return false if every element is distinct
        
        //iterate through array
        //use set to ensure no duplicates
        
        Set<Integer> set = new HashSet<Integer>();
        
        for (int i = 0; i < nums.length; i++){
            if (set.contains(nums[i])){
                return true;
            } else {
                set.add(nums[i]);
            }
        }
        
        return false;
        
    }
}