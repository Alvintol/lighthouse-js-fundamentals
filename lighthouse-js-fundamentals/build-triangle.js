//CONDITIONS
/*
create a function called buildTriangle() that will 
accept an input (the triangle at its widest width) 
and will return the string representation of a 
triangle
*/

function makeLine(length) {
  let line = "";
  for (let a = 1; a <= length; a++){
    line += "* ";
  } return line + "\n";
}
// console.log(makeLine(3));

function buildTriangle(length) {
  let triangle = "";
  for (let lNum = 1; lNum <= length; lNum++){
    triangle = triangle += makeLine(lNum);
  }return triangle;
}
console.log(buildTriangle(10))