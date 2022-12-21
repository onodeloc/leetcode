# 8/78

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # have array of nums
        # want to reach target
        
        # limitations:
        # can't use same number twice
        # there is exactly one solution

        for i in range(0, len(nums)):
            # iterate through loop
            # print information

            for x in range(i + 1, len(nums)):
                # iterate through elements after i
                # if i + curr matches, return

                if (nums[i] + nums[x] == target):
                    return [i,x]