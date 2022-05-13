const removeFromArray = function(arr, ...args) {
    let result = arr;
    let toDel = [...args];
    console.log(toDel)
    for (i = 0 ; i < toDel.length ; i++) {
        result = result.filter(item => item !== toDel[i]);
    }
    return result;

};

console.log(removeFromArray([1, 2, 3], "1", 3))


// Do not edit below this line
module.exports = removeFromArray;
