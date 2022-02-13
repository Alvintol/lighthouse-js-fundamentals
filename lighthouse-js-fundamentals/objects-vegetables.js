//Conditions
/*
 - Implement a function called judgeVegetable()
 that will decide which vegetable is best based 
 on a given judging characteristic. 
 - Two parameters: 
    -list of veggies(as an array of object)
    -characteristic to judge the veggies by
 - must return the name of the person who 
 submitted (vegetables.submitter) the vegetable 
 with the highest ranking in the provided category
*/
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (
  vegetables, metric) {
  let winner = vegetables[1];
  for (let a = 0; a < vegetables.length; a++) {
    if (vegetables[a][metric] > winner[metric]) {
      winner = vegetables[a];
    }
  }
  return winner['submitter'];
}

console.log(judgeVegetable(vegetables, metric));