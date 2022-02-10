//Conditions
/*
Your function will receive an array of stations, 
where each station itself is an array with a (name),
a (capacity), and a (venue type)

**In order for a station to be deemed appropriate, 
it must have a (capacity of at least 20), 
and be a (school or community centre)
*/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  let goodStations = [];

  for (let option = 0; option < stations.length; option++){
    // console.log(stations[option]);
    if (stations[option][1] >= 20 && 
      (stations[option][2] == 'school' ||
      stations[option][2] == 'community centre')){
      // console.log(stations[option][0]);
      goodStations.push(stations[option][0]);
    }
  }return goodStations;
}
console.log(chooseStations(stations));