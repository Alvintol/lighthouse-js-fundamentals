// Conditions
/* 
 - Start by creating an array of iceCreamFlavours 
with flavours we've seen so far
 - Add the flavour "root beer" to the array without 
 modifying the original array. Then console.log 
 the value of the entire array.
 - Someone wants the first flavour of ice cream: 
console.log the first flavour in the array.
 - Someone wants the last flavour of ice cream:
console.log the last flavour in the array.
 - Someone wants to know how many options there are.
console.log the resulting number of flavours in 
the array
*/

const iceCreamFlavours = ["chocolate", "vanilla", 
"cookies and cream", "rocky road", "strawberry"];
let fullList = iceCreamFlavours.slice()
fullList.push("root beer");
console.log(fullList);

console.log(fullList[0]);
console.log(fullList[5]);
console.log(fullList.length);


