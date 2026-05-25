let test = "1+1"

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

console.log(calculate("1182*123"));
