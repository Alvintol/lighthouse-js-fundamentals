//Condition
/*
 - Define a function lastIndexOf.
 - When this function is given an array and a value,
  it should return the index of the last time the 
  value occurs in the array.
 - If the value never occurs, the function should 
  return -1
 - You CANNOT use .indexOf()
*/

const lastIndexOf = function (arr, index){
  let lastIndex = -1;
  for (let a = 0; a < arr.length; a++){
    if (arr[a] == index){
      lastIndex = a;
    }
  }return lastIndex;
}



console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);