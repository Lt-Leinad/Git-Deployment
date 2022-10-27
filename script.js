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
const minorPattern = [0, 0, -1, 0, 0, -1, -1, 0];
const ionianPattern = [0, 0, 0, 0, 0, 0, 0, 0];
const dorianPattern = [0, 0, -1, 0, 0, 0, -1, 0];
const phrygianPattern = [0, -1, -1, 0, 0, -1, -1, 0];
const mixolydianPattern = [0, 0, 0, 0, 0, 0, -1, 0];
const lydianPattern = [0, 0, 0, 1, 0, 0, 0, 0];
const locrianPattern = [0, 1, -1, 0, -1, -1, -1, 0];

//modes
const modes = [
  majorPattern,
  dorianPattern,
  phrygianPattern,
  lydianPattern,
  mixolydianPattern,
  minorPattern,
  locrianPattern,
];

//Scale Function
const scales = function (note, mode) {
  return majorScale(note).map((x, i) => notes[notes.indexOf(x) + mode[i]]);
};

// const minorScale = function (n) {
//   return majorScale(n).map((x, i) => notes[notes.indexOf(x) + minorPattern[i]]);
// };

// const dorianScale = function (n) {
//   return majorScale(n).map(
//     (x, i) => notes[notes.indexOf(x) + dorianPattern[i]]
//   );
// };

// const phrygianScale = function (n) {
//   return majorScale(n).map(
//     (x, i) => notes[notes.indexOf(x) + phrygianPattern[i]]
//   );
// };

// const lydianScale = function (n) {
//   return majorScale(n).map(
//     (x, i) => notes[notes.indexOf(x) + lydianPattern[i]]
//   );
// };

// const mixolydianScale = function (n) {
//   return majorScale(n).map(
//     (x, i) => notes[notes.indexOf(x) + mixolydianPattern[i]]
//   );
// };

// const locrianScale = function (n) {
//   return majorScale(n).map(
//     (x, i) => notes[notes.indexOf(x) + locrianPattern[i]]
//   );
// };

console.log(scales("D#", ionianPattern));
// console.log(scales("G", dorianPattern));
console.log(scales("G", phrygianPattern));
// console.log(scales("G", lydianPattern));
// console.log(scales("G", mixolydianPattern));
// console.log(scales("A", minorPattern));
// console.log(scales("G", locrianPattern));
