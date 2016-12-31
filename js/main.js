var wordsList = ['apple', 'hammer', 'cricket', 'mirror', 'grass'];

var temp = [];

var pickedLetters = [];

var wrongPicks = 0;

var rightPicks = 0;

var secretWord;

var selectedLetter = '';

var word;


$('#play').on('click', init);

$('#keyboard').click(function(e) {
  selectedLetter = $(e.target).text().toLowerCase();
  checkMatch(selectedLetter);
});


function init() {
  resetVars();
  shuffleWords(wordsList);
  splitWord();
  makePickedLetters();
  addSpaces();
}

function resetVars() {
  $('#letters-area').children("p").remove();
  wordsList = ['apple', 'hammer', 'cricket', 'mirror', 'grass'];
  temp = [];
  pickedLetters = [];
  wrongPicks = 0;
  rightPicks = 0;
  secretWord;
  selectedLetter = '';
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
    $('#letters-area').append('<p class="test">_</p>');
  }
}

function checkMatch(x) {
  if (secretWord.includes(x)) {
    for (i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === x) {
        pickedLetters.splice(i, 1, x);
        $('p:eq('+i+')').text(x);
        rightPicks++;
      }
    }
  } else {
    wrongPicks++;
  }
}







