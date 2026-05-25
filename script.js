const calculate = function(calcu) {
  const splitCalcu = calcu.split(/[+-/*]/)
  const x = parseInt(splitCalcu[0]);
  const y = parseInt(splitCalcu[1]);
  
  if (calcu.indexOf('+') > -1) {
    return x + y;
  } else if (calcu.indexOf('-') > -1) {
    return x - y;
  } else if (calcu.indexOf('*') > -1) {
    return x * y;
  } else if (calcu.indexOf('/') > -1) {
    return x / y;
  }
}

const changeDisplay = function(button) {
  
  if (displayCalculation.textContent === "Calculator" || displayCalculation.textContent === "0") {
    displayCalculation.textContent = button;
  } else if (button === "=") {
    displayCalculation.textContent = calculate(displayCalculation.textContent);
  } else if (displayCalculation.textContent.search(/[+-/*]/) > -1 && button.search(/[+-/*]/) > -1) {
    displayCalculation.textContent = calculate(displayCalculation.textContent);
  } else if (button === "C") {
    displayCalculation.textContent = 0;
  } else {
    displayCalculation.textContent += button;
  }
}

const displayCalculation = document.querySelector(".display");
const calculatorButtons = document.querySelectorAll("button");

calculatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    buttonValue = button.textContent;
    changeDisplay(buttonValue);
  });
});

console.log(calculate("1182*123"));
