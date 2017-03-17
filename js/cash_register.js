(function() {

  function newElement(elemType, parentID, className, htmlID, elemText, clickEvent) {
    var newElem = document.createElement(elemType);
    newElem.id = htmlID;
    newElem.className = className;
    newElem.innerHTML = elemText;

    var parNode = document.getElementById(parentID);
    parNode.appendChild(newElem);
  }


  newElement("button", "firstRow", "topRowBtns", "btn7", "7");
  newElement("button", "firstRow", "topRowBtns", "btn8", "8");
  newElement("button", "firstRow", "topRowBtns", "btn9", "9");
  newElement("button", "firstRow", "topRowBtns", "dvdBtn", "/");
  newElement("button", "firstRow", "topRowBtns spcBtn", "clearBtn", "Clear");

  newElement("button", "secondRow", "secondRowBtns", "btn4", "4");
  newElement("button", "secondRow", "secondRowBtns", "btn5", "5");
  newElement("button", "secondRow", "secondRowBtns", "btn6", "6");
  newElement("button", "secondRow", "secondRowBtns", "mltyBtn", "*");
  newElement("button", "secondRow", "secondRowBtns spcBtn", "getBalBtn", "Get Balance");

  newElement("button", "thirdRow", "thirdRowBtns", "btn3", "3");
  newElement("button", "thirdRow", "thirdRowBtns", "btn2", "2");
  newElement("button", "thirdRow", "thirdRowBtns", "btn1", "1");
  newElement("button", "thirdRow", "thirdRowBtns", "subBtn", "-");
  newElement("button", "thirdRow", "thirdRowBtns spcBtn", "depBtn", "Deposit Cash");

  newElement("button", "fourthRow", "fourthRowBtns", "btn0", "0");
  newElement("button", "fourthRow", "fourthRowBtns", "btn00", "00");
  newElement("button", "fourthRow", "fourthRowBtns", "btnDot", ".");
  newElement("button", "fourthRow", "fourthRowBtns", "addBtn", "+");
  newElement("button", "fourthRow", "fourthRowBtns spcBtn", "wtdrBtn", "Withdraw Cash");

  newElement("button", "fifthRow", "fiftheRowBtns", "equalBtn", "=");






  var calcScreen = document.querySelector("#numDisplay");
  calcScreen. innerHTML = calculatorModule.getTotal();


})();

