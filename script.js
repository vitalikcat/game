var words = ["javascript", "monkey", "amazing", "pancake"];

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

var answerArray = [];
for (let index = 0; index < answerArray.length; index++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
  alert(answerArray.join(" "));

  var guess = prompt("Guess a letter, or click Cancel to stop playing.");

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(" "));
alert("Good job! the answer was " + word);
