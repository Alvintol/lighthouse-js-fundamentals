let count = 0;
const loopyLighthouse = (range, multiple, words) => {
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