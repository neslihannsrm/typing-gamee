
// Variables for the DOM elements
const wordElement = document.getElementById("word");
const inputElement = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("time");
// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

let score = 0;
let time =  20;


function addWordToDOM() {
  const randomIndex = Math.floor(Math.random() * words.length); 
  const randomWord = words[randomIndex]; 
  wordElement.innerText = randomWord;
}


function updateScore() {
  score += 1; 
  scoreElement.innerText = `Score: ${score}`; 
}

inputElement.addEventListener("input", function () {
  const currentWord = wordElement.innerText; 
  const userInput = inputElement.value; 

  if (userInput === currentWord) {
    updateScore(); 
    addWordToDOM(); 
    inputElement.value = ""; 
  }
});


function updateTime() {
  time -= 1; 
  timerElement.innerText = `Time: ${time}s`; 

  if (time === 0) {
    clearInterval(timerInterval);
    gameOver(); 
  }
}

function gameOver() {
  document.body.innerHTML = `
    <div style="text-align: center;">
      <h1>Game Over!</h1>
      <p>Your final score is: ${score}</p>
      <button onclick="location.reload()">Play Again</button>
    </div>
  `;
}




addWordToDOM();
scoreElement.innerText = `Score: ${score}`;
timerElement.innerText = `Time: ${time}s`;

const timerInterval = setInterval(updateTime, 1000); 