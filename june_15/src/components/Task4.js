function showTime() {
  const now = new Date();

  const time = now.toLocaleTimeString();

  document.getElementById("clock").textContent = time;
}


setInterval(showTime, 1000);
showTime();



let seconds = 0;
let timer = null;

function updateStopwatch() {
  seconds++;

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  document.getElementById("stopwatch").textContent =
    `${hrs}:${mins}:${secs}`;
}

function startTimer() {
  if (timer === null) {
    timer = setInterval(updateStopwatch, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resumeTimer() {
  startTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  seconds = 0;

  document.getElementById("stopwatch").textContent = "00:00:00";
}


