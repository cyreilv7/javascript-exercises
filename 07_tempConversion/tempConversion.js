const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) * 5/9;
  return Math.round(cTemp * 10) / 10;
};

const ctof = function(cTemp) {
  let fTemp = (cTemp * 9/5) + 32;
  return Math.round(fTemp * 10) / 10; // 123.45 --> 1234.5 --> 1235 --> 123.5
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
