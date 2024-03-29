//conditions
/*
Define a function howManyHundreds
When this function is given a number, it should 
return how many hundreds fit into that number
*/
const howManyHundreds = function (num){
  let total = num / 100;
  return Math.floor(total);
}
// console.log(howManyHundreds());
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);