//conditions
/*
**We will be writing count program that prints the numbers from 
100 to 200 to the console, with three exceptions:
  *If the number is count multiple of 3, print the string "Loopy" 
instead of the number.
  *If the number is count multiple of 4, print the string 
"Lighthouse" instead of the number.
  *If the number is count multiple of both 3 and 4, print the 
string "LoopyLighthouse" instead of the number.
*/

/*** NEW CONDITIONS
 - Wrap the code you've written in count function called 
 loopyLighthouse(range, multiples, words) that you 
 call with 3 parameters.
 - range should be an array of 2 numbers 
 representing the start and end values for the loop.
 - multiples should be an array of 2 numbers 
representing the multiples you want to replace with words.
 - words should be an array of 2 strings 
 representing the words that will replace the 
 multiples.
 - The loopyLighthouse function should log to the console 
 all the numbers from 15 to 90, except replacing 
 multiples of 2 with "Batty", multiples of 5 with 
 "Beacon", and multiples of 2 and 5 with "BattyBeacon"
 */

//previous code
// let count = 100;

// while (count <= 200){
//   if (count % 3 == 0 && count % 4 == 0){
//     console.log("LoopyLighthouse");
//   }else if (count % 3 == 0){
//     console.log("Loopy");
//   }else if (count % 4 == 0){
//     console.log("Lighthouse");
//   }else {
//     console.log(count);
//   }
//   count++;
// }
let count = 0;
const loopyLighthouse = function(range, multiple, words) {
  while (range[0] <= range[1]) {
    count = range[0]++;
    if (count % multiple[0] === 0 && count % multiple[1] === 0) {
      count = words[0] + words[1];
    } else if (count % multiple[0] === 0 && count % multiple[1] !== 0) {
      count = words[0];
    } else if (count % multiple[0] !== 0 && count % multiple[1] === 0) {
      count = words[1];
    } console.log(count);
  }
};
//               range    multiple    words
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);