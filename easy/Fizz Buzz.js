/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    //console.log(n)
    var arr = []
    
    for (var i = 1; i < n + 1; i++){
        console.log(i)
        
        if ((i % 3 == 0) && (i % 5 == 0)){
            arr.push("FizzBuzz")
        }
        else if (i % 3 == 0){
            arr.push("Fizz")
        }
        else if (i % 5 == 0){
            arr.push("Buzz")
        }
        else {
            arr.push(i.toString())
        }
    }
    
    return arr
};