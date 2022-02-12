//Condtions
/*
 - Define a function called range
 The function takes 3 integer parameters: 
  start, end, and step.
The function should return an array of numbers from 
  start to end counting by step.
*/

const range = function (start, end, step) {
  let array = [];
  for (let a = start; a <= end; a++) {
    // console.log(start)
    if (start === undefined ||
      end === undefined ||
      step === undefined ||
      start > end ||
      step <= 0) {
      return array;
    } else if (start % step === 0) {
      array.push(start);
    }
    start++;
  } return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-9, 3, 3));