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
  addPictures(wrongPicks);
});


function init() {
  resetVars();
  shuffleWords(wordsList);
  splitWord();
  makePickedLetters();
  addSpaces();
  addPictures(wrongPicks);
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
    $('#letters-area').append('<p>_</p>');
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

function addPictures(wrongPicks) {
  switch (wrongPicks) {
    case 0:
      $('#hangman-area').children("img").remove();
      $('#hangman-area').append('<img src="assets/3.png">');
      break;
    case 1:
      $('#hangman-area').children("img").remove();
      $('#hangman-area').append('<img src="assets/4.png">');
      break;
    case 2:
      $('#hangman-area').children("img").remove();
      $('#hangman-area').append('<img src="assets/5.png">');
      break;
    case 3:
      $('#hangman-area').children("img").remove();
      $('#hangman-area').append('<img src="assets/6.png">');
      break;
    case 4:
      $('#hangman-area').children("img").remove();
      $('#hangman-area').append('<img src="assets/7.png">');
      break;
    case 5:
      $('#hangman-area').children("img").remove();
      $('#hangman-area').append('<img src="assets/8.png">');
      break;
    case 6:
      $('#hangman-area').children("img").remove();
      $('#hangman-area').append('<img src="assets/9.png">');
      break;
    case 7:
      $('#hangman-area').children("img").remove();
      $('#hangman-area').append('<img src="assets/10.png">');
      break;
  }
}






