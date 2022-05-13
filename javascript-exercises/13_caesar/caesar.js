const caesar = function(str , rightShiftBy) {
    let result = []; //to be the result stringArray
    for(i = 0 ; i < str.length ; i++) {
       
        let k = str.charCodeAt(i);
        console.log(capitalModulo(k + rightShiftBy % 26))

        if(isAlphabet(k)) {
            if(isCapital(k)) {
                result.push(String.fromCharCode(capitalModulo(k + rightShiftBy % 26)));
            } else {
                result.push(String.fromCharCode(smallCaseModulo(k + rightShiftBy % 26)));
            }
            
        } else {
            result.push(str.charAt(i));
        }

    }
    
    return result.join('').toString();

};

const capitalModulo = function (num) {
    if(num<65) {
        return 90 - (65 - num - 1)
    } else if (num > 90) {
        return num - 90 + 65 -1;
    } else {
        return num;
    }

}

const smallCaseModulo = function (num) {
    if(num < 65) {
        return 122 - (97 - num - 1)
    } else if (num > 122) {
        return num -122 + 97 - 1;
    } else {
        return num;
    }
}


const isAlphabet = function(charInt) {
    return ((charInt >= 65 && charInt <= 90) || (charInt >= 97 && charInt<= 122))
}

const isCapital  = function(charInt) {
    return (charInt >= 65 && charInt <= 90);
}

console.log(caesar('Z', 1));
// Do not edit below this line
module.exports = caesar;
