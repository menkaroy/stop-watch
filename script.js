let timerInterval;
let isTimerRunning = false;
let timerValue = 0;

// Format the time into HH:MM:SS format
function formatTime(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

// Start the timer
function startTimer() {
  if (!isTimerRunning) {
    if (timerValue === 0) {
      timerValue = 0; // If timer is 0, start from the beginning
    }
    isTimerRunning = true;
    timerInterval = setInterval(function () {
      timerValue++;
      document.getElementById("display").textContent = formatTime(timerValue);
    }, 1000);
  }
}

// Stop the timer
function stopTimer() {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
  }
}

// Reset the timer
function resetTimer() {
  stopTimer();
  timerValue = 0;
  document.getElementById("display").textContent = formatTime(timerValue);
}

// Event listeners for buttons
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
