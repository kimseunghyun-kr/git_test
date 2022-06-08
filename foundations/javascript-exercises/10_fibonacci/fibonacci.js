const fibonacci = function(nth) {
    if(nth<0) {
        return "OOPS"
    } else {
        const primer = [0,0]
        return fibIter(0, parseInt(nth), primer)
    }
};

const fibIter = function(iter, dest, result) {
 
    if (iter === dest) {
        return result[1];
    } else {
        if(iter <= 1) {
            result[0] = result[1];
            result[1] = 1;
            
            return fibIter(iter + 1, dest, result);
        } else {
            
            let temp = result[0];
            result[0] = result[1];
            result[1] = result[1] + temp;

           
            return fibIter(iter + 1, dest, result);
        }
    }
}

// actual count starts from 1
// 0   1  2  3 4
// 00 01 11 12 23




// Do not edit below this line
module.exports = fibonacci;
