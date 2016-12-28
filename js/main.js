var wordsList = ['apple', 'hammer', 'cricket', 'mirror', 'grass'];

var temp = [];

var pickedLetters = [];

var wrongPicks = 0;

var rightPicks = 0;

var secretWord;

var selectedLetter;


$('#play').on('click', init);

$('#keyboard').click(function(e) {
  selectedLetter = $(e.target).text();
});


function init() {
  wordsList = ['apple', 'hammer', 'cricket', 'mirror', 'grass'];
  shuffleWords(wordsList);
  splitWord();
  makePickedLetters();
  addSpaces();
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

function makePickedLetters() {
  for (i = 0; i < secretWord.length; i++) {
    pickedLetters.push('');
  }
}

function addSpaces() {
  for (i = 0; i < secretWord.length; i++) {
    $('#letters-area').append('<p>-</p>');
  }
}
