//Conditions
/*
 - Write a loop under each comment in the file.
 - Under the first, write a while loop that prints
 out each item of ingredients.
 - Under the second, write a for loop that does the 
 same thing.
 - And under the third, write any loop, while or 
 for that prints out each item of ingredients but 
 backwards (that is, the first should be "bananas" 
 and the last "eggs").
*/

const ingredients = ["eggs", "milk", "flour", 
"sugar", "baking soda", "baking powder", 
"chocolate chips", "bananas"];

// Write a while loop that prints out the contents 
// of ingredients:
let a = 0;
while (a < ingredients.length){
  console.log(ingredients[a]);
  a++;
}

// Write a for loop that prints out the contents of 
// ingredients:
for (let a = 0; a < ingredients.length; a++){
  console.log(ingredients[a]);
}

// Write any loop (while or for) that prints out the
// contents of ingredients backwards:
let c = (ingredients.length - 1);
while (c >= 0){
  console.log(ingredients[c]);
  c--;
}