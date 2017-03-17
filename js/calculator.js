(function mathCalculator() {
  var displayNum = 0;

  var addKey = false;
  var subtractKey = false;
  var multiplyKey = false;
  var divideKey = false;

  function numKey(num) {
    if (addKey) {
      displayNum += num;
    } else if (subtractKey) {
      displayNum -= num;
    } else if (multiplyKey) {
      displayNum *= num;
    } else if (divideKey) {
      displayNum /= num;
    } else {
      displayNum = num;
    }
    addKey = false;
    subtractKey = false;
    multiplyKey = false;
    divideKey = false;
  }


  function equalKey() {

  }



})

