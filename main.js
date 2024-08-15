const quoteDisplay = document.getElementById('quote');
const inputArea = document.getElementById('input');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const resultsDisplay = document.getElementById('results');

const sampleText = "The quick brown fox jumps over the lazy dog.";

let startTime, endTime;

startButton.addEventListener('click', startTest);
resetButton.addEventListener('click', resetTest);

function startTest() {
  quoteDisplay.textContent = sampleText;
  inputArea.value = "";
  inputArea.disabled = false;
  inputArea.focus();
  startTime = new Date().getTime();
  startButton.disabled = true;
  resultsDisplay.textContent = "";
}

inputArea.addEventListener('input', () => {
  const textEntered = inputArea.value;
  const textMatch = sampleText.substring(0, textEntered.length);

  if (textEntered === sampleText) {
    endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000;
    const wordsPerMinute = (sampleText.split(' ').length / timeTaken) * 60;
    resultsDisplay.textContent = `Time taken: ${timeTaken.toFixed(2)} seconds, Words per minute: ${wordsPerMinute.toFixed(2)}`;
    inputArea.disabled = true;
    startButton.disabled = false;
  } else if (textEntered !== textMatch) {
    resultsDisplay.textContent = "Text mismatch. Keep typing!";
  } else {
    resultsDisplay.textContent = "";
  }
});

function resetTest() {
  inputArea.value = "";
  inputArea.disabled = true;
  startButton.disabled = false;
  resultsDisplay.textContent = "";
  quoteDisplay.textContent = "Click 'Start Test' to begin";
}