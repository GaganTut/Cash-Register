(function() {

  var calc = calculatorModule();

  var firstNum = 0.00;
  var exprClicked = false;
  var secondNum = 0.00;

  function clearDisplay() {
    firstNum = 0;
    secondNum = 0;
    exprClicked = false;

    for (var dis in opBtnClass) {
      opBtnClass[dis].disabled = false;
    }
    screenDisplay.innerHTML = firstNum;
    checkDecimal();
  }


  var screenDisplay = document.getElementById("numDisplay");
  var opBtnClass = document.getElementsByClassName("operationBtn");


  function newElement(elemType, parentID, className, htmlID, elemText) {
    var newElem = document.createElement(elemType);
    newElem.id = htmlID;
    newElem.className = className;
    newElem.innerHTML = elemText;

    var parNode = document.getElementById(parentID);
    parNode.appendChild(newElem);
  }

  function clickNumKey(elemID) {
    var thisNumKey = document.getElementById(elemID);
    thisNumKey.addEventListener("click", function(event) {
      displayOnScreen(event.target.innerHTML);
    });
  }

  function operationKey(elemID) {
    var thisOpKey = document.getElementById(elemID);
    thisOpKey.addEventListener("click", function() {
      exprClicked = true;
      for (var i in opBtnClass) {
        opBtnClass[i].disabled = false;
      }
      thisOpKey.disabled = true;
    });
  }

  function displayOnScreen(newNum) {
    if (exprClicked === false) {
      if (firstNum === 0) {
        firstNum = newNum;
        screenDisplay.innerHTML = firstNum;
      } else {
        firstNum += newNum;
        screenDisplay.innerHTML = firstNum;
      }
    } else {
      if (secondNum === 0) {
      secondNum = newNum;
      screenDisplay.innerHTML = secondNum;
    } else {
      secondNum += newNum;
      screenDisplay.innerHTML = secondNum;
    }
    }
    checkDecimal();
  }

  function equalSign() {
    var thisEqualBtn = document.getElementById("equalBtn");
    thisEqualBtn.addEventListener("click", function(){
      if (dvdBtn.disabled === true) {
        firstNum = calc.divide(parseFloat(firstNum), parseFloat(secondNum));
        screenDisplay.innerHTML = parseFloat(firstNum).toFixed(2);
        secondNum = 0;
        exprClicked = false;
      } else if (mltyBtn.disabled === true) {
        firstNum = calc.multiply(parseFloat(firstNum), parseFloat(secondNum));
        screenDisplay.innerHTML = parseFloat(firstNum).toFixed(2);
        secondNum = 0;
        exprClicked = false;
      } else if (subBtn.disabled === true) {
        firstNum = screenDisplay.innerHTML = calc.subtract(parseFloat(firstNum), parseFloat(secondNum));
        secondNum = 0;
        exprClicked = false;
      } else if (addBtn.disabled === true) {
        firstNum = screenDisplay.innerHTML = calc.add(parseFloat(firstNum), parseFloat(secondNum));
        secondNum = 0;
        exprClicked = false;
      }
      for (var dis in opBtnClass) {
        opBtnClass[dis].disabled = false;
      }
      checkDecimal();
    });
  }

  function useClearBtn() {
    var thisClearBtn = document.getElementById("clearBtn");
    thisClearBtn.addEventListener("click", function(){
      clearDisplay();
    });
  }

  function checkDecimal() {
    var deciBtn = document.getElementById("btnDot");
    var checkDec = parseFloat(screenDisplay.innerHTML);
    if (checkDec % 1 !== 0 || screenDisplay.innerHTML.indexOf(".") !== -1) {
      deciBtn.disabled = true;
    } else {
      deciBtn.disabled = false;
    }
  }

  function showBalance() {
    var balBtn = document.getElementById("getBalBtn");
    balBtn.addEventListener("click", function() {
      clearDisplay();
      firstNum = calc.getBalance();
      screenDisplay.innerHTML = calc.getBalance();
    });
  }

  function depCash() {
    var depCashBtn = document.getElementById("depBtn");
    depCashBtn.addEventListener("click", function() {
      calc.depBalance(screenDisplay.innerHTML);
    });
  }

  function withdrawCash() {
    var withCashBtn = document.getElementById("wtdrBtn");
    withCashBtn.addEventListener("click", function() {
      calc.wdBalance(screenDisplay.innerHTML);
    });
  }



  newElement("button", "firstRow", "numberBtns", "btn7", "7");
  clickNumKey("btn7");
  newElement("button", "firstRow", "numberBtns", "btn8", "8");
  clickNumKey("btn8");
  newElement("button", "firstRow", "numberBtns", "btn9", "9");
  clickNumKey("btn9");
  newElement("button", "firstRow", "operationBtn", "dvdBtn", "/");
  operationKey("dvdBtn");
  newElement("button", "firstRow", "topRowBtns spcBtn", "clearBtn", "Clear");
  useClearBtn();

  newElement("button", "secondRow", "numberBtns", "btn4", "4");
  clickNumKey("btn4");
  newElement("button", "secondRow", "numberBtns", "btn5", "5");
  clickNumKey("btn5");
  newElement("button", "secondRow", "numberBtns", "btn6", "6");
  clickNumKey("btn6");
  newElement("button", "secondRow", "operationBtn", "mltyBtn", "*");
  operationKey("mltyBtn");
  newElement("button", "secondRow", "secondRowBtns spcBtn", "getBalBtn", "Get Balance");
  showBalance();

  newElement("button", "thirdRow", "numberBtns", "btn3", "3");
  clickNumKey("btn3");
  newElement("button", "thirdRow", "numberBtns", "btn2", "2");
  clickNumKey("btn2");
  newElement("button", "thirdRow", "numberBtns", "btn1", "1");
  clickNumKey("btn1");
  newElement("button", "thirdRow", "operationBtn", "subBtn", "-");
  operationKey("subBtn");
  newElement("button", "thirdRow", "thirdRowBtns spcBtn", "depBtn", "Deposit Cash");
  depCash();

  newElement("button", "fourthRow", "numberBtns", "btn0", "0");
  clickNumKey("btn0");
  newElement("button", "fourthRow", "numberBtns", "btn00", "00");
  clickNumKey("btn00");
  newElement("button", "fourthRow", "numberBtns", "btnDot", ".");
  clickNumKey("btnDot");
  newElement("button", "fourthRow", "operationBtn", "addBtn", "+");
  operationKey("addBtn");
  newElement("button", "fourthRow", "fourthRowBtns spcBtn", "wtdrBtn", "Withdraw Cash");
  withdrawCash();

  newElement("button", "fifthRow", "fiftheRowBtns", "equalBtn", "=");
  equalSign();

})();

