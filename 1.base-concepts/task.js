"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant === 0) {
    let squareRoot = - b / (2 * a);
    arr.push(squareRoot); 
  } else if (discriminant > 0) {
      let squareRoot1 = (- b + Math.sqrt(discriminant)) / (2 * a);
      let squareRoot2 = (- b - Math.sqrt(discriminant)) / (2 * a);
      arr.push(squareRoot1);
      arr.push(squareRoot2);
    } 
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  countMonths = +countMonths;

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } 
  
  percent = (percent / 100) / 12;
  let principalDebt = amount - contribution;
  let monthlyPayment = principalDebt * (percent + (percent / (Math.pow((1 + percent), countMonths) - 1)));
  let totalMortgage = monthlyPayment * countMonths;
  totalMortgage = +totalMortgage.toFixed(2);
      
  return totalMortgage;
}