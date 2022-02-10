//Conditions
/*
Define 3 functions to calculate the areas of 3 
different shapes:

- rectangle: length × width
- triangle: base × height / 2
- circle: π × radius2 (Math.PI × Math.pow(radius, 2))
*/


const calculateRectangleArea = (length, width) => 
(length * width) <= 0 ? undefined : length * width;

const calculateTriangleArea = (base, height) => 
((base * height) / 2) <= 0 ? undefined : (base * height) / 2;

const calculateCircleArea = (radius) => 
(Math.PI * Math.pow(radius, 2)) <= 0 || radius <= 0 ? 
undefined : Math.PI * Math.pow(radius, 2);

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1));