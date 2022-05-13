const ftoc = function(tempFaren) {
  return Math.round((tempFaren - 32.0) * 5.0 / 9.0 * 10) / 10;

};

const ctof = function(tempCelc) {
  return Math.round((tempCelc * 9.0 / 5.0 + 32.0) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
