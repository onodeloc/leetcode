// 58/68

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {

    var pasArr = [];
    pasArr.push([1]);

    for (let i = 1; i < numRows; i++){
        let currArr = [];
        currArr.push(1);
        
        for (let y = 1; y < i; y++){
            currArr.push(pasArr[i - 1][y - 1] + pasArr[i - 1][y]);
        }

        currArr.push(1);
        
        pasArr.push(currArr);
    }

    return pasArr;
};