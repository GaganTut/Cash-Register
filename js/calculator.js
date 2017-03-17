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
  function add(num) {
    testError(num);
    _total += num;
    return _total.toFixed(2);
  }
  function subtract(num) {
    testError(num);
    _total -= num;
    return _total.toFixed(2);
  }
  function multiply(num) {
    testError(num);
    _total *= num;
    return _total.toFixed(2);
  }
  function divide(num) {
    testError(num);
    _total /= num;
    return _total.toFixed(2);
  }

  function getBalance() {
    return _registerBalance.toFixed(2);
  }

  function depBalance(num) {
    _registerBalance += num;
  }

  function wdBalance(num) {
    _registerBalance -= num;
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
    clear
  };

  return calculator;
})();
