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

//Function to find the scale based on note and modal name
//----------MORE DESCRIPTIVE FUNCTION NAMES NEEDED----------
const whatScale = function (note, mode) {
  return majorScale(note).map((x, i) =>
    notes.indexOf(x) + mode[i] < 0
      ? notes[notes.indexOf(x) + mode[i] + notes.length]
      : notes.indexOf(x) + mode[i] > notes.length
      ? notes[notes.indexOf(x) + mode[i] - notes.length]
      : notes[notes.indexOf(x) + mode[i]]
  );
};

//Function to find the name of the scale based on chord
const whereScale = function (...chords) {
  let key = chords[0];
  let keyModes = modes.map((x, i) => whatScale(key, modes[i]));
  let theMode = keyModes.map((x) => chords.every((y) => x.includes(y)));
  //-----------CHANGE REQUIRED TO ACCOMADATE MULTIPLE SCALE OPTIONS--------------------
  switch (theMode.indexOf(true)) {
    case 0:
      return `${keyModes[0][0]} Ionian`;
      break;
    case 1:
      return `${keyModes[0][0]} Dorian`;
      break;
    case 2:
      return `${keyModes[0][0]} Phrygian`;
      break;
    case 3:
      return `${keyModes[0][0]} Lydian`;
      break;
    case 4:
      return `${keyModes[0][0]} Mixolydian`;
      break;
    case 5:
      return `${keyModes[0][0]} Aeolian`;
      break;
    case 6:
      return `${keyModes[0][0]} Locrian`;
      break;
    case 7:
      return `${keyModes[0][0]} Harmonic Minor`;
      break;
    case 8:
      return `${keyModes[0][0]} Melodic Minor`;
      break;
    default:
      return "There Is A Wrong Note!";
  }
};

console.log(whatScale("C", ionianPattern));
console.log(whereScale("D", "G#", "A", "C#"));
console.log(whereScale("C", "D", "D#", "F", "G", "A", "B"));
