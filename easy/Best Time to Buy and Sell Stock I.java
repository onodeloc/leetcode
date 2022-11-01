// Runtime: 341 ms, faster than 5.07% of Java online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 59.5 MB, less than 83.90% of Java online submissions for Best Time to Buy and Sell Stock.

// solution is not optimized
// iterates through array on initialization, determines maximum profit
// the next time a price is lower, iterate through again and compare against maxProfit
// return largest value

class Solution {
    public int maxProfit(int[] prices) {
        
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        
        for (int i = 0; i < prices.length - 1; i++){
            
            if (prices[i] < minPrice){ // replace minPrice if new
                minPrice = prices[i];
                
                for (int y = i + 1; y < prices.length; y++){ // if the new price is lower, iterate through and check maxProfit
                    
                    if ((prices[y] - prices[i]) > maxProfit){ // if maxProfit is less, set maxProfit to higher val
                        maxProfit = prices[y] - prices[i];
                    }
                    
                }
                
            } 
        }
        
        return maxProfit;
        
    }
}