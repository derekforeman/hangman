var guessedLetters = [];
var wordToGuess = "";
var isGameRunning = false;
let words = ['this', 'that', 'another'];
var wordToGuessLen = 0;
var wordTemplate;


window.onload = (event) => {
	document.getElementById('letter').focus();
};

//object.addEventListener("click", myScript);
//document.getElementById("demo").innerHTML = "Hello World";
function StartGame() {
  isGameRunning = true;
  GetWordToGuess();
}

function GetWordToGuess() {
  wordToGuess =  words[Math.floor(Math.random() * words.length)];
  wordToGuessLen = wordToGuess.length;
  wordTemplate = GetShadowStringForWord(wordToGuess);
  document.getElementById('correctLetters').innerText = wordTemplate;
  //set letters in word
		document.getElementById('lettersInWord').innerText = 'There are ' + wordToGuessLen + ' letters in your word.';
}

function AddGuessedLetter(letter) {
  if(guessedLetters.includes(letter))
  {
    alert("You already guessed that Letter, try again!");
    return;
  }

  guessedLetters.push(letter);
		document.getElementById('GuessedLetters').innerText += letter;
		document.getElementById('letter').focus();
		//guessedLetters.forEach(item => console.log(item));
}

function Guess() {
  console.log("Guess pressed");
  if(!isGameRunning) {
    console.log("Start Game to Guess!");
  }
  //GAME IS RUNNING
  //add letter
  var letter = document.getElementById('letter').value
  AddGuessedLetter(letter);
  //clear letter
  document.getElementById('letter').value = '';
  //did letter match word?
  if(wordToGuess.includes(letter)) {
  		let pos = FindLetterPositionsInWord(letter);
    //update letter match.
				UpdateShadowStringForLetters(pos, letter);
  }
  CheckWin();
}

function CheckWin(){
	let guessedWord = document.getElementById('correctLetters').innerText;
	if(guessedWord === wordToGuess){
		alert(`🏆 You win!! 🏆 \n It took you ${guessedLetters.length} guesses.`);
		Quit();
	}
}

function Quit() {
  console.log('quit');
  //clear variable values and update screen.
  wordToGuess = '';
  isGameRunning = false;
  guessedLetters = [];
  document.getElementById('lettersInWord').innerText = '';
		document.getElementById('GuessedLetters').innerText = '';
		document.getElementById('correctLetters').innerText = '';
}

function FindLetterPositionsInWord(letter) {
  var indices = [];
  for(var i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === letter) indices.push(i);
  }
  return indices;
}


function replaceAt(str, index, ch) {
	return str.replace(/./g, (c, i) => i == index ? ch : c);
}

function UpdateShadowStringForLetters(pos, letter) {
	var shadow = document.getElementById('correctLetters').innerText;

	// var split = shadow.split('');
	// //each letter is separated by a space
	// //after the first position (0) we need to skip the spaces
	for (var i = 0; i < pos.length; i++) {
		if(i == 0){
			shadow = replaceAt(shadow,pos[i], letter);
		}
		shadow = replaceAt(shadow,pos[i + 1], letter);
	}

	document.getElementById('correctLetters').innerText = shadow;
}

function GetShadowStringForWord(word) {
  var len = word.length;
  var template = "_";
  var templateString = "";
  for (var i = 0; i < len; i++)
  {
    templateString += template;
  }
  return templateString;
}

function UpdateShadow(wordTemplate) {
  document.getElementById('GuessedLetters').innerText = wordTemplate;
}
