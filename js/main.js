var wordsList = ['apple', 'hammer', 'cricket', 'mirror', 'grass'];

var temp = [];

var wrongPicks = 0;

var rightPicks = 0;

var secretWord


$('#play').on('click', test);

$('#keyboard').on('click', test);


function test() {
  console.log('works');
}


function init() {
  shuffleWords(wordsList);
  splitWord();
  console.log(secretWord);
}

function shuffleWords(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

function splitWord() {
  temp.push(wordsList.shift());
  secretWord = temp.toString().split('');
}
