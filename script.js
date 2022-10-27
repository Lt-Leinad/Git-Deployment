const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
//W W H W W W H
const majorPattern = [0, 2, 2, 1, 2, 2, 2, 1];
const majorScale = function (n) {
  let answer = [];
  let count = notes.indexOf(n);
  for (let i = 0; i < majorPattern.length; i++) {
    count += majorPattern[i];
    answer.push(
      count <= notes.length - 1 ? notes[count] : notes[count - notes.length]
    );
  }
  return answer;
};
//Minor Scale
const ionianPattern = [0, 0, 0, 0, 0, 0, 0, 0];
const dorianPattern = [0, 0, -1, 0, 0, 0, -1, 0];
const phrygianPattern = [0, -1, -1, 0, 0, -1, -1, 0];
const lydianPattern = [0, 0, 0, 1, 0, 0, 0, 0];
const mixolydianPattern = [0, 0, 0, 0, 0, 0, -1, 0];
const aeolianPattern = [0, 0, -1, 0, 0, -1, -1, 0];
const locrianPattern = [0, 1, -1, 0, -1, -1, -1, 0];

//modes
const modes = [
  ionianPattern,
  dorianPattern,
  phrygianPattern,
  lydianPattern,
  mixolydianPattern,
  aeolianPattern,
  locrianPattern,
];

//Scale Function
const scales = function (note, mode) {
  return majorScale(note).map((x, i) =>
    notes.indexOf(x) + mode[i] < 0
      ? notes[notes.indexOf(x) + mode[i] + notes.length]
      : notes.indexOf(x) + mode[i] > notes.length
      ? notes[notes.indexOf(x) + mode[i] - notes.length]
      : notes[notes.indexOf(x) + mode[i]]
  );
};

console.log(scales("G#", ionianPattern));
console.log(scales("G", dorianPattern));
console.log(scales("G", phrygianPattern));
// console.log(scales("G", lydianPattern));
// console.log(scales("G", mixolydianPattern));
// console.log(scales("A", minorPattern));
// console.log(scales("G", locrianPattern));
