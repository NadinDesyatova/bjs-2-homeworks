"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant == 0) {
    let squareRoot = - b / (2 * a);
    arr.push(squareRoot); 
  } else if (discriminant > 0) {
      let squareRoot1 = (- b + Math.sqrt(discriminant)) / (2 * a);
      let squareRoot2 = (- b - Math.sqrt(discriminant)) / (2 * a);
      arr.push(squareRoot1);
      arr.push(squareRoot2);
    } else if (discriminant < 0) {
      return arr;
      }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}