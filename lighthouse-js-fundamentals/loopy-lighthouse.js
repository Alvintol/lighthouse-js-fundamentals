let count = 0;
const loopyLighthouse = (range, multiple, words) => {
  while (range[0] <= range[1]) {
    count = range[0]++;
    const multi0 = count % multiple[0];
    const multi1 = count % multiple[1];
    if (multi0 === 0 && multi1 === 0) {
      count = words[0] + words[1];
    } else if (multi0 === 0 && multi1 !== 0) {
      count = words[0];
    } else if (multi0 !== 0 && multi1 === 0) {
      count = words[1];
    } console.log(count);
  }
};
//               range    multiple    words
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);