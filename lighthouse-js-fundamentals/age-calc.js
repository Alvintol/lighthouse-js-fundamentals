// Conditions
/*
Define a function called ageCalculator. This 
function should take 3 parameters:

- name – a string representing someone's name
- yearOfBirth – a number representing their year 
of birth
- currentYear – a number representing the current
year

The ageCalculator function should return a string
explaining how old the person is.
*/

const ageCalculator = function (name, yearofBirth, currentYear){
  
  let age = currentYear - yearofBirth;
  return `"${name} is ${age} years old."`

}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));