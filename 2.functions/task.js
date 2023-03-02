function getArrayParams(...arr) {
  if ([...arr].length < 1) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;
  let avg = 0;
  min = Math.min(...arr);
  max = Math.max(...arr);
  avg = [...arr].reduce((accum, current, index, arr) => {
    accum += current;
    if (index === arr.length - 1) {
      return accum / arr.length;
    }
    return accum;
  }, 0);
  avg = +avg.toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if ([...arr].length < 1) {
    return 0;
  }

  let sumAllElements = [...arr].reduce((accum, current) => accum + current, 0);
  return sumAllElements;
}

function differenceMaxMinWorker(...arr) {
  if ([...arr].length < 1) {
      return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if ([...arr].length < 1) {
      return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < [...arr].length; i++) {
    if ([...arr][i] % 2 === 0) {
      sumEvenElement += [...arr][i];
    } else {
      sumOddElement += [...arr][i];
    }
  }

 return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if ([...arr].length < 1) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
   for (let i = 0; i < [...arr].length; i++) {
    if ([...arr][i] % 2 === 0) {
      sumEvenElement += [...arr][i];
      countEvenElement++;
    } 
   } 
    
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]); 
    if (resultFunc >  maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }  
  }

  return maxWorkerResult;
}

