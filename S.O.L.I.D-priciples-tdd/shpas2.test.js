import {
  Square,
  Circle,
  AreaCalculator,
  SquareWithArea,
  CircleWithArea,
  AreaCalculatorWithArea,
} from "./shapes.js";

test("show return the length of a square to 5", () => {
  const sq1 = new SquareWithArea(5);
  expect(sq1.length).toBe(5);
});

test("show return the area of a square to 5", () => {
  const sq1 = new SquareWithArea(5);
  expect(sq1.area()).toBe(25);
});

test("show return the radius of a circle to 5", () => {
  const circ1 = new CircleWithArea(5);
  expect(circ1.radius).toBe(5);
});

test("show return the area of a circle with radius of 5", () => {
  const circ1 = new CircleWithArea(5);
  expect(circ1.area()).toBe(78.539816339744830961566084581988);
});

//sums test- all kinds of end cases:

test("calculate the correct sum of areas of squares of 5 and 7 length", () => {
  const sq1 = new SquareWithArea(7);
  const sq2 = new SquareWithArea(5);
  const calc1 = new AreaCalculatorWithArea([sq1, sq2]);
  expect(calc1.sum()).toBe(74);
});

// // test("calculate the correct sum of areas of squares of 0 and 7 length", () => {
// //   const sq1 = new SquareWithArea(0);
// //   const sq2 = new SquareWithArea(7);
// //   const calc1 = new AreaCalculatorWithArea([sq1, sq2]);

// //   expect(calc1.sum()).toBe(Error("Bad Length"));
// // });

// // test("calculate the correct sum of areas of squares of 10 and -7 length", () => {
// //   const sq1 = new SquareWithArea(10);
// //   const sq2 = new SquareWithArea(-7);
// //   const calc1 = new AreaCalculatorWithArea([sq1, sq2]);

// //   expect(calc1.sum()).toBe(catch Error("Bad Length"));
// // });

test("calculate the correct sum of areas of squares of 0.7 and 10 length", () => {
  const sq1 = new SquareWithArea(0.7);
  const sq2 = new SquareWithArea(10);
  const calc1 = new AreaCalculatorWithArea([sq1, sq2]);

  expect(calc1.sum()).toBe(100.49);
});

test("calculate the correct sum of areas of squares of 15 times 1 length", () => {
  const sq1 = new SquareWithArea(1);
  const calc1 = new AreaCalculatorWithArea([
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
    sq1,
  ]);

  expect(calc1.sum()).toBe(15);
});

test("calculate the correct sum of areas of circles of 5 and 7 radius", () => {
  const circ1 = new CircleWithArea(7);
  const circ2 = new CircleWithArea(5);
  const calc1 = new AreaCalculatorWithArea([circ1, circ2]);

  expect(calc1.sum()).toBe(232.47785636564469964623561036269);
});

// // test("calculate the correct sum of areas of circles of 0 and 7 radius", () => {
// //   const circ1 = new CircleWithArea(0);
// //   const circ2 = new CircleWithArea(7);
// //   const calc1 = new AreaCalculatorWithArea([circ1, circ2]);

// //   expect(calc1.sum()).toBe(Error("Bad Radius"));
// // });

// // test("calculate the correct sum of areas of circles of 10 and -7 radius", () => {
// //   const circ1 = new CircleWithArea(10);
// //   const circ2 = new CircleWithArea(-7);
// //   const calc1 = new AreaCalculatorWithArea([circ1, circ2]);

// //   expect(calc1.sum()).toBe(catch Error("Bad Radius"));
// // });

test("calculate the correct sum of areas of circles of 0.7 and 10 radius", () => {
  const circ1 = new CircleWithArea(0.7);
  const circ2 = new CircleWithArea(10);
  const calc1 = new AreaCalculatorWithArea([circ1, circ2]);
  expect(calc1.sum()).toBe(315.69864575923832253311103358576);
});

test("calculate the correct sum of areas of circles of 15 times 1 radius", () => {
  const circ1 = new CircleWithArea(1);
  const calc1 = new AreaCalculatorWithArea([
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
    circ1,
  ]);

  expect(calc1.sum()).toBe(47.12388980384691);
});

test("calculate the correct sum of areas of circles of 5 and a square of 7 radius", () => {
  const sqr1 = new SquareWithArea(7);
  const circ2 = new CircleWithArea(5);
  const calc1 = new AreaCalculatorWithArea([sqr1, circ2]);

  expect(calc1.sum()).toBe(127.53981633974483096156608458199);
});

test("calculate the correct sum of areas of circles of 5, 0.5, 7 ,0.7 lengthes and squares of 5, 0.5, 7 ,0.7 radiuses", () => {
  const sqr1 = new SquareWithArea(5);
  const sqr2 = new SquareWithArea(0.5);
  const sqr3 = new SquareWithArea(7);
  const sqr4 = new SquareWithArea(0.7);
  const circ1 = new CircleWithArea(5);
  const circ2 = new CircleWithArea(0.5);
  const circ3 = new CircleWithArea(7);
  const circ4 = new CircleWithArea(0.7);

  const calc1 = new AreaCalculatorWithArea([
    sqr1,
    sqr2,
    sqr3,
    sqr4,
    circ1,
    circ2,
    circ3,
    circ4,
  ]);

  expect(calc1.sum()).toBe(309.54263492930114664269796646631);
});
