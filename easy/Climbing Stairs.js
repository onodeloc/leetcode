// 54/41
// ...now I understand why using an object is better here
// once we define the object value, its O(1) to access
// as opposed to .includes, which is O(n)

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // i am climbing a staircase
    // it will be n steps to reach the top of this staircase
    // each time i can either climb 1 or 2 steps
    // how many ways to reach the top of the staircase?

    const imTired = (n,memo={}) => {

        if (n < 2 ){
            return 1;
        }

        if (memo[n] > 0){
            return memo[n];
        } else {
            memo[n] = imTired(n - 1, memo) + imTired (n - 2, memo);
        }
        
        return memo[n];
    }

    return imTired(n);
};