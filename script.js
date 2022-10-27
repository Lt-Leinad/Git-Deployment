const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
//W W H W W W H
//Function to find the major scale
const majorPattern = [0, 2, 2, 1, 2, 2, 2];
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

//modal mutations patterns
const ionianPattern = [0, 0, 0, 0, 0, 0, 0];
const dorianPattern = [0, 0, -1, 0, 0, 0, -1];
const phrygianPattern = [0, -1, -1, 0, 0, -1, -1];
const lydianPattern = [0, 0, 0, 1, 0, 0, 0];
const mixolydianPattern = [0, 0, 0, 0, 0, 0, -1];
const aeolianPattern = [0, 0, -1, 0, 0, -1, -1];
const locrianPattern = [0, -1, -1, 0, -1, -1, -1];
const harmonicMinorPattern = [0, 0, -1, 0, 0, -1, 0];
const melodicMinorPattern = [0, 0, -1, 0, 0, 0, 0];

//mode names and order
const modes = [
  ionianPattern,
  dorianPattern,
  phrygianPattern,
  lydianPattern,
  mixolydianPattern,
  aeolianPattern,
  locrianPattern,
  harmonicMinorPattern,
  melodicMinorPattern,
];

const modeNames = [
  "Ionian",
  "Dorian",
  "Phrygian",
  "Lydian",
  "Mixolydian",
  "Aeolian",
  "Locrian",
  "Harmonic Minor",
  "Melodic Minor",
];

//Function to find the scale based on note and modal name
const findScaleNotes = function (note, mode) {
  return majorScale(note).map((x, i) =>
    notes.indexOf(x) + mode[i] < 0
      ? notes[notes.indexOf(x) + mode[i] + notes.length]
      : notes.indexOf(x) + mode[i] > notes.length
      ? notes[notes.indexOf(x) + mode[i] - notes.length]
      : notes[notes.indexOf(x) + mode[i]]
  );
};

//Function to find the name of the scale based on chord
const findScaleName = function (...chords) {
  let key = chords[0];
  let keyModes = modes.map((x, i) => findScaleNotes(key, modes[i]));
  let theModes = keyModes.map((x) => chords.every((y) => x.includes(y)));
  let answer = [];
  theModes.forEach((x, i) => {
    if (x) answer.push(`${key} ${modeNames[i]}`);
  });
  return answer.length > 0 ? answer : "That's a very complex key change!";
};

console.log(findScaleNotes("C", melodicMinorPattern));
console.log(findScaleName("B", "D", "F", "F#"));
