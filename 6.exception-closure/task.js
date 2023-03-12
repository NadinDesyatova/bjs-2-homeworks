function parseCount(number) {
  let resultParseCount = Number.parseFloat(number);
  resultParseCount = +resultParseCount;
  if (isNaN(resultParseCount)) {
  	throw new Error("Невалидное значение");
  }

  return resultParseCount;
}

function validateCount(number) {
  try {
  	parseCount(number);
  } catch (error) {
      return error;
    }
   return parseCount(number);
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    if (sideC > sideA + sideB || sideB > sideA + sideC || sideA > sideB + sideC) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  
  get perimeter() {
	  return this.sideA + this.sideB + this.sideC;
  }
  
  get area() {
	  return +Math.sqrt((this.perimeter / 2) * ((this.perimeter / 2) - this.sideA) * ((this.perimeter / 2) - this.sideB) * ((this.perimeter / 2) - this.sideC)).toFixed(3);
  }
}


function getTriangle(sideA, sideB, sideC) {
  try {
  	new Triangle(sideA, sideB, sideC);
  } catch (error) {
      return {
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
        get area() {
          return 'Ошибка! Треугольник не существует';
        }
      }
    }
  return new Triangle(sideA, sideB, sideC);
}