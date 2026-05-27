const calculate = function(num1, num2, operator) {
  // const splitCalcu = calcu.split(/[+-/*]/)
  // const x = parseInt(splitCalcu[0]);
  // const y = parseInt(splitCalcu[1]);
  //
  // if (calcu.indexOf('+') > -1) {
  //   return x + y;
  // } else if (calcu.indexOf('-') > -1) {
  //   return x - y;
  // } else if (calcu.indexOf('*') > -1) {
  //   return x * y;
  // } else if (calcu.indexOf('/') > -1) {
  //   return x / y;
  // }
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    
  }
}

const changeDisplay = function(button) {
  
  // if (displayCalculation.textContent === "Calculator" || displayCalculation.textContent === "0") {
  //   displayCalculation.textContent = button;
  // } else if (button === "=") {
  //   displayCalculation.textContent = calculate(displayCalculation.textContent);
  // } else if (displayCalculation.textContent.search(/[+-/*]/) > -1 && button.search(/[+-/*]/) > -1) {
  //   displayCalculation.textContent = calculate(displayCalculation.textContent);
  // } else if (button === "C") {
  //   displayCalculation.textContent = 0;
  // } else {
  //   displayCalculation.textContent += button;
  // }
  // currentDisplay = displayCalculation.textContent;
  // if (button === "C") {
  //     displayCalculation.textContent = 0;
  //     displayOperator.textContent = ""
  //     calculatorNumOne = null;
  //     calculatorNumTwo = null;
  //     calculatorOperator = null;
  // } else if (currentDisplay === "0") {
  //   if (button.search(/[+-/*0=]/) < 0) {
  //     displayCalculation.textContent = button;
  //   }
  // } else if (button === "=") {
  //   calculatorNumTwo = displayCalculation.textContent;
  //   calculatedNum = calculate(calculatorNumOne, calculatorNumTwo, calculatorOperator);
  //
  //   displayCalculation.textContent = calculatedNum;
  //   calculatorOperator = null;
  //   calculatorNumOne = calculatedNum;
  // } else if (button.search(/[+-/*]/) > -1) {
  //   displayOperator.textContent = button;
  //
  //   if (calculatorOperator != undefined) {
  //     calculatorNumTwo = displayCalculation.textContent;
  //
  //     calculatedNum = calculate(calculatorNumOne, calculatorNumTwo, button);
  //
  //     displayCalculation.textContent = calculatedNum;
  //     calculatorNumOne = calculatedNum;
  //     calculatorNumTwo = "calculated";
  //   } else {
  //     calculatorNumOne = displayCalculation.textContent;
  //     calculatorOperator = button;
  //     displayCalculation.textContent = 0;
  //   }
  // } else {
  //   if (calculatorOperator != undefined && calculatorNumTwo === "calculated") {
  //     displayCalculation.textContent = button;
  //     calculatorNumTwo = 0
  //   } else {
  //     displayCalculation.textContent += button;
  //   }
  // }
  const calculatorNumTwo = displayCalculation.textContent;
  
  if (button === "C") {
    calculatorNumOne = null;
    calculatorOperator = null;
    updateDisplayNumber(0);
    displayOperator.textContent = "";
  } else if (isButtonOperator(button)) {
    if (calculatorNumOne != undefined && calculatorOperator != undefined && calculateAnother === "no") {
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
        console.log(calculateAnother);
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
