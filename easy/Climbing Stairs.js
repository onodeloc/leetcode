// 5/7
// this is just the fibonacci sequence

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // i am climbing a staircase
    // it will be n steps to reach the top of this staircase
    // each time i can either climb 1 or 2 steps
    // how many ways to reach the top of the staircase?

    const imTired = (n,memo=[]) => {

        if (n < 2 ){
            return 1;
        }

        if (memo.includes(n)){
            return memo[n];
        } else {
            memo[n] = imTired(n - 1, memo) + imTired (n - 2, memo);
        }
        
        return memo[n];
    }

    return imTired(n);
};