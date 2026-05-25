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
      return num1 - num2;
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
  currentDisplay = displayCalculation.textContent;

  if (currentDisplay === "0") {
    displayCalculation.textContent = button;
  } else if (button.search(/[+-/*]/) > -1) {
    if (calculatorOperator !== undefined) {
      calculatorNumTwo = displayCalculation.textContent;
      
      calculatedNum = calculate(calculatorNumOne, calculatorNumTwo, calculatorOperator);
      
      displayCalculation.textContent = calculatedNum;
      calculatorNumOne = calculatedNum;
      calculatorNumTwo = "calculated";
      // calculatorOperator = undefined;
    } else {
      calculatorNumOne = displayCalculation.textContent;
      calculatorOperator = button;
      displayCalculation.textContent = 0;
    }
  } else {
    if (calculatorOperator !== undefined && calculatorNumTwo === "calculated") {
      displayCalculation.textContent = button;
      calculatorNumTwo = 0
    } else {
      displayCalculation.textContent += button;
    }
  }
}

const displayCalculation = document.querySelector(".display");
const calculatorButtons = document.querySelectorAll("button");
let calculatorNumOne;
let calculatorNumTwo;
let calculatorOperator;

calculatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    buttonValue = button.textContent;
    changeDisplay(buttonValue);
  });
});
