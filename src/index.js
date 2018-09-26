module.exports = function getZerosCount(number) {
    let result = 0;
  
  while (number >= 5) {
    number = parseInt(number / 5);
    result = result + number;
  }
  return result;
}
