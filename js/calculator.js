var calculatorModule = (function() {
  var _memory = 0;
  var _total = 0.00;
  var _registerBalance = 0;


  function testError(testNum) {
    if (typeof testNum !== "number") {
      throw new Error("That ain't a number!!!");
    }
  }

  function load(newTotal) {
    testError(newTotal);
    _total = newTotal;
    return _total.toFixed(2);
  }
  function getTotal() {
    return _total.toFixed(2);
  }
  function add(num1, num2) {
    testError(num1);
    newSum = num1 + num2;
    return newSum.toFixed(2);
  }
  function subtract(num1, num2) {
    testError(num1);
    newSub = num1 - num2;
    return newSub.toFixed(2);
  }
  function multiply(num1, num2) {
    testError(num1);
    newMlty = num1 * num2;
    return newMlty.toFixed(2);
  }
  function divide(num1, num2) {
    testError(num1);
    newDvd = num1 / num2;
    return newDvd.toFixed(2);
  }

  function getBalance() {
    return _registerBalance;
  }

  function depBalance(num) {
    var toNum = parseFloat(num);
    _registerBalance += toNum;
  }

  function wdBalance(num) {
    var toNum = parseFloat(num);
    _registerBalance -= toNum;
  }

  function clear() {
    _total = 0;
    return _total.toFixed(0);
  }

  var calculator = {
    load,
    getTotal,
    add,
    subtract,
    multiply,
    divide,
    getBalance,
    depBalance,
    wdBalance,
    clear
  };

  return calculator;
});
