//Conditions
/*
- Your code should have an `emotions()` function
- Your code should call the `emotions()` function
- Your `emotions()` function call should have an 
inline function expression passed as the second 
parameter
- Your function expression should return the 
expected output
 
*/
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function(num){
  let lStr = "";
  for (let ha = 0; ha < num; ha++){
    lStr = lStr + "ha";}
    lStr = lStr + "!";
    return lStr;
})
