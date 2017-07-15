
let operandDisplay = [ "", "" ]
let operatorDisplay = "";

let virtualDisplayBox = "";
let displayBox = document.getElementById("displayBox")

let toggle = false


function okToInputDecimal() {return (operandDisplay[+ toggle].indexOf(".") === -1) && (operandDisplay[+ toggle].innerText != "")}
function okToEvaluate() {return (operandDisplay[0] != "" && operandDisplay[1] != "" && operatorDisplay != "")}

function updateDisplay(nextSymbol) {
  operandDisplay[+ toggle] = operandDisplay[+ toggle] + nextSymbol
  virtualDisplayBox = operandDisplay[0] + operatorDisplay + operandDisplay[1]
  displayBox.innerText = ""
  displayBox.innerText = virtualDisplayBox

}


function operandInput(nextSymbol) {
  if(nextSymbol === "0") {
    if(operandDisplay[+ toggle] != "") {
      updateDisplay(nextSymbol)
    } else {
      redBlink()

    }

  } else if( (nextSymbol === ".") && okToInputDecimal() ) {
    if(operandDisplay[+ toggle] != "") {
      updateDisplay(nextSymbol)
    } else {
      redBlink()
      
    }

  } else if( nextSymbol.match(/[\d]/) ) {
    updateDisplay(nextSymbol)

  } else {
    redBlink()
  }

}


function operatorInput(nextSymbol) {
  toggle = !(toggle)
  operatorDisplay = nextSymbol
  updateDisplay("")

}


function doTheMaths() {
  let operand1 = parseFloat(operandDisplay[0])
  let operand2 = parseFloat(operandDisplay[1])
  let operator = operatorDisplay

  if(operator === "/") {
    return operand1 / operand2

  } else if(operator === "*") {
    return operand1 * operand2

  } else if(operator === "-") {
    return operand1 - operand2

  } else if(operator === "+") {
    return operand1 + operand2

  } else {

  }

}


function resetVariables() {
  operandDisplay = [ "", "" ]
  operatorDisplay = "";

  virtualDisplayBox = "";

  toggle = false

}

function redBlink() {
  displayBox.classList.add("redbackground");
  setTimeout(function(){displayBox.classList.add("originalbackground");}, 500);
  setTimeout(function(){
    displayBox.classList.remove("originalbackground");
    displayBox.classList.remove("redbackground");
  }, 1000);

}


function inputController(nextSymbol) {
  if( nextSymbol.match(/[\d\.]/) ){
    operandInput(nextSymbol)

  } else if( nextSymbol.match(/[/*\-+]/) && operatorDisplay === "" && operandDisplay[0] != "") {
    operatorInput(nextSymbol)

  } else if( nextSymbol === "=" && okToEvaluate() ) {
    displayBox.innerText = doTheMaths()
    resetVariables()

  } else if (nextSymbol === "C") {
    displayBox.innerText = ""
    resetVariables()

  } else {
    redBlink()

  }

}
