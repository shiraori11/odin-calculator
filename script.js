const calculate = function(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    
  }
}

const changeDisplay = function(button) {
  const calculatorNumTwo = displayCalculation.textContent;
  
  if (button === "C") {
    calculatorNumOne = null;
    calculatorOperator = null;
    updateDisplayNumber(0);
    displayOperator.textContent = "";
  } else if (button === ".") {
    if (displayCalculation.textContent.indexOf(".") > -1) {
      // do nothing
    } else if (displayCalculation.textContent == 0) {
      displayCalculation.textContent += button;
    }
  } else if (isButtonOperator(button)) {
    if (calculatorNumOne != undefined && calculatorOperator != undefined) {
      calculatedNumber = calculate(calculatorNumOne, calculatorNumTwo, calculatorOperator);
      calculatorNumOne = calculatedNumber;
      calculateAnother = "yes";
      calculatorOperator = button;
      updateDisplayNumber(calculatedNumber);
    } else {
      calculatorNumOne = displayCalculation.textContent;
      calculatorOperator = button;
      updateDisplayNumber(0);
    }
  } else if (button === "=") {
      if (calculatorOperator == undefined) {
        //donothing
      } else {
        calculatedNumber = calculate(calculatorNumOne, calculatorNumTwo, calculatorOperator);
        updateDisplayNumber(calculatedNumber);
        calculatorOperator = null;
      }
  } else {
    if (displayCalculation.textContent === "0") {
      displayCalculation.textContent = button;
    } else if (displayCalculation.textContent !== "0" && calculateAnother === "yes") {
      displayCalculation.textContent = button;
      calculateAnother = "no";
    } else {
      displayCalculation.textContent += button;
    }
  }
}

const updateDisplayNumber = function(num) {
  displayCalculation.textContent = num;
}

const isButtonOperator = function(button) {
  return button.search(/[+-/*]/) > -1;
}

const displayCalculation = document.querySelector(".display");
const calculatorButtons = document.querySelectorAll("button");
const displayOperator = document.querySelector(".display-operator")
let calculatorNumOne;
let calculatorOperator;
let calculateAnother;

calculatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    buttonValue = button.textContent;
    changeDisplay(buttonValue);
  });
});
