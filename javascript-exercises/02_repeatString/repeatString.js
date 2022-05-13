const repeatString = function(string, numOfTimes) {
    let temp = string;
    for(i = 0; i<numOfTimes-1 ; i++){
        
        temp = temp + string;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
