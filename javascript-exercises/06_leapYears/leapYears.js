const leapYears = function(num1) {
    let remainder = num1%4
    if(remainder == 0) {
        let dividend = num1 % 100;
        if(dividend !== 0) {
            return true;
        } else {
            let last = num1 % 400;
            if(last == 0) {
                return true;
            }
        }
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
