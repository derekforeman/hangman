var guessedLetters = [];
var wordToGuess = "";
var isGameRunning = false;
let words = ['this', 'that', 'another'];
var wordToGuessLen = 0;
var wordTemplate;

//object.addEventListener("click", myScript);
//document.getElementById("demo").innerHTML = "Hello World";

function StartGame()
{
  isGameRunning = true;
  GetWordToGuess();

  console.log(wordToGuess);
  console.log(isGameRunning);
}

function GetWordToGuess()
{
  wordToGuess =  words[Math.floor(Math.random() * words.length)];
  wordToGuessLen = wordToGuess.length;
  wordTemplate = GetShadowStringForWord(wordToGuess);
  console.log(wordToGuessLen);
}

function AddGuessedLetter(letter)
{
  if(guessedLetters.includes(letter))
  {
    alert("You already guessed that Letter, try again!");
    return;
  }

  guessedLetters.push(letter);
		document.getElementById('GuessedLetters').innerText += letter;
  // guessedLetters.forEach(function(item, index, array) {
  // 	console.log(item, index);
  // }
  guessedLetters.forEach(item => console.log(item));
}

function Guess()
{
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
     //let pos = FindLetterPositionsInWord(letter);
    //update letter match.
  }

}

function Quit()
{
  console.log('quit');
  //clear variable values and update screen.
  wordToGuess = '';
  isGameRunning = false;
  guessedLetters = [];
  document.getElementById('GuessedLetters').innerText = '';
}

function FindLetterPositionsInWord(letter)
{
  var indices = [];
  for(var i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === letter) indices.push(i);
  }
  return indices;
}

function GetShadowStringForWord(word)
{
  var len = word.length;
  var template = "_ ";
  var templateString = "";
  for (var i = 0; i < len; i++)
  {
    templateString += template;
  }
  return templateString;
}

function UpdateShadow(wordTemplate)
{
  document.getElementById('GuessedLetters').innerText = wordTemplate;
}
