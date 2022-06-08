const findTheOldest = function(personArr) {
    const isAlive = x => x.yearOfDeath == null;
    const OLDEST = personArr.reduce((x,y) => (x.yearOfDeath-x.yearOfBirth) > (y.yearOfDeath-y.yearOfBirth) ? x : y , personArr[0]);

    let x = personArr.sort((x,y) => -(x.yearOfDeath-x.yearOfBirth)+(y.yearOfDeath-y.yearOfBirth))[0];
    console.log(x);
    return OLDEST;
};

// Do not edit below this line
module.exports = findTheOldest;
