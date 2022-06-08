const sumAll = function(num1, num2) {
    let result = 0;
    if (typeof (num1) === "number" && typeof (num2) === "number") {

        let big = num1 > num2 ? num1 : num2;
        let small = num1 > num2 ? num2 : num1;

        if (big < 0 || small < 0) {
            return "ERROR";
        }

        for (i = small; i <= big; i++) {
            result += i;
        }
        return result;
    } else{
        return "ERROR"
    }




};

sumAll(10, [90, 1]);


// Do not edit below this line
module.exports = sumAll;
