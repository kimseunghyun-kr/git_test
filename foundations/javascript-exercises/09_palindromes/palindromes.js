const palindromes = function (str) {
    let stringArr = str.toLowerCase().replace(/[.,/#!$%^&*;:{}=-_`~()' ']/g, "").split("")
    console.log(stringArr);
    let reversed = [...stringArr].reverse();
    while(stringArr.length !== 0) {

        if(stringArr.pop() === reversed.pop()){
            continue;
        } else {
            return false;
        }
        
    }

    return true;

};



// Do not edit below this line
module.exports = palindromes;
