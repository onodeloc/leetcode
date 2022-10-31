import java.util.Arrays;
//this will need to be commented out for the code to run on LC

class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        System.out.println(Arrays.toString(nums));
        System.out.println(target);
        // basic printout to confirm test cases
        // uses Arrays to print array as string
        
        int arr[];
        arr = new int[2];
        // substantiate and populate array
        
        
        for (int i = 0; i < nums.length; i++){
            
            int currNum = nums[i]; // set currNum to base value
            
            for (int y = i + 1; y < nums.length; y++){
                
                int scrollNum = nums[y]; // set scrollNum to move through remaining elements and attempt to match
                
                if ((currNum + scrollNum) == target){
                    arr[0] = i;
                    arr[1] = y;
                    return arr;
                }
            }
        }
        
        return arr;
    }
}