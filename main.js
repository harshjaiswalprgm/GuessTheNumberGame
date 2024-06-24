// Declare variables
let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

// Get HTML elements
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event Listener for button click
submit.addEventListener("click", checkGuess);

// Function to check the guess
function checkGuess() {
  const userValue = Number(guess.value);
  attempts++;

  // Calculate attempts left
  const attemptsLeft = maxAttempts - attempts;

  // Using Conditionals
  if (attemptsLeft === 0) {
    hint.textContent = "Game over! The number was " + randomNum;
    submit.disabled = true; // Disable the submit button after max attempts reached
  } else if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed it!";
    submit.disabled = true; // Disable the submit button after correct guess
  } else if (userValue < randomNum) {
    hint.textContent = "Too low! Try again. Attempts left: " + attemptsLeft;
  } else {
    hint.textContent = "Too high! Try again. Attempts left: " + attemptsLeft;
  }

  // Display the number of attempts
  attemptsText.textContent = "Attempts: " + attempts;

  
}


