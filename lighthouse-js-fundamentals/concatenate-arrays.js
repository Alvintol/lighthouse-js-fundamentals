//Conditions
/*
 - Define a function called concat
 - The function should, when given two arrays, 
 concatenate the arrays together
*/
const concat = function (data1, data2) {
  for (let a = 0; a < data2.length; a++){
    data1.push(data2[a]);
  }
  return data1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);