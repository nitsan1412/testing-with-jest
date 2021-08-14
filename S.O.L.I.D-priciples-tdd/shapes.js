// The S.O.L.I.D princilple for OOP - object oriented programing

// S - Single responsibility principle

// function / class  - every object has a specific responsibility

export class Square {
  length;

  constructor(length) {
    this.length = length;
  }

  getLegth() {
    return this.length;
  }
}

export class Circle {
  radius;

  constructor(radius) {
    this.radius = radius;
  }
}

export class AreaCalculator {
  shapes;
  areas;

  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    this.areas = [];

    this.shapes.forEach((shape) => {
      if (shape instanceof Square) {
        //  this.areas.push(shape.length ^ 2)
        if (shape.length <= 0) {
          throw Error("Bad Length");
        } else {
          this.areas.push(Math.pow(shape.length, 2));
        }
      } else if (shape instanceof Circle) {
        //  this.areas.push( Math.PI * Math.pow( shape.radius , 2 ) )
        if (shape.radius <= 0) {
          throw Error("Bad Radius");
        } else {
          this.areas.push(Math.PI * shape.radius ** 2);
        }
      } else {
        throw Error("Bad Shape");
      }
    });

    return this._sumArray(this.areas);
  }

  _sumArray(array) {
    return array.reduce((sum, current) => {
      return sum + current;
    });
  }

  output() {
    return `The Sum of all the Shapes in Area is: 
                ${this.sum()}`;
  }
}

export class AreaCalculatorHtml {
  calculator;
  data;

  constructor(calculator) {
    this.calculator = calculator;
  }

  JSON() {
    this.data = [{ sum: this.calculator.sum() }];

    return JSON.stringify(this.data);
  }

  HTML() {
    return `<div> The sum is ${this.calculator.sum()} </div>`;
  }
}

const shapes = [
  new Circle(5),
  new Square(7),
  new Circle(8),
  new Circle(10),
  new Square(18),
  new Square(20),
];

let areaCalc = new AreaCalculator(shapes);

let htmlAreaCalc = new AreaCalculatorHtml(areaCalc);

console.log(areaCalc.output());

console.log(htmlAreaCalc.HTML());

// O - Open-closed Princile

export class SquareWithArea extends Square {
  area() {
    if (this.length <= 0) {
      throw Error("Bad Length");
    } else {
      return Math.pow(this.length, 2);
    }
  }
}
export class CircleWithArea extends Circle {
  area() {
    if (this.radius <= 0) {
      throw Error("Bad Length");
    } else {
      return Math.PI * this.radius ** 2;
    }
  }
}
export class AreaCalculatorWithArea extends AreaCalculator {
  constructor(shapes) {
    super(shapes);
  }

  sum() {
    this.areas = [];
    this.shapes.forEach((shape) => this.areas.push(shape.area()));
    return this._sumArray(this.areas);
  }
}

const sq1 = new SquareWithArea(5);

const crq1 = new CircleWithArea(50);

const areaCalc2 = new AreaCalculatorWithArea([sq1, crq1]);

const areaCalc2Html = new AreaCalculatorHtml(areaCalc2);

console.log(sq1.area());
console.log(crq1.area());

console.log(areaCalc2.sum());
console.log(areaCalc2Html.JSON());

// L - Liskov Substitution Principle

// We want a new calculator for Volume Calculation

export class VolumeCalculator extends AreaCalculator {
  constructor(shapes = []) {
    super(shapes);
  }

  sum() {
    // ... logic to calculate the volumes and then return an array of output
    return [summedData];
  }
}

const volumeCalc2 = new VolumeCalculator([sq1, crq1]);

const volumeCalc2Html = new AreaCalculatorHtml(volumeCalc2);

// I - Interface Segregation Principle

// I don't have to implement what I don't need!!!

// D - Dependency Inversion Principle

// DRY - Don't repeat yourself - functions

// KISS - Keep it simple stupid - make the simplest solution / algorith without with little complexity

// TDD - Test driven development - JEST
