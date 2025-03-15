const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
const loading = document.getElementById("loading");
// const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
const newYearTime = new Date(Date.UTC(currentYear + 1));
console.log(newYearTime);

// set background year

year.innerHTML = currentYear + 1;

// Update countDown timer
function updateCountDown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime; // Time difference in milliseconds

  const daysremain = Math.floor(diff / 86400000); // Get total days
  const hoursremain = Math.floor((diff % 86400000) / 3600000); // Remaining hours after extracting days
  const minutesremain = Math.floor((diff % 3600000) / 60000); // Remaining minutes after extracting hours
  const secondsremain = Math.floor((diff % 60000) / 1000);

  days.innerHTML = daysremain;
  hours.innerHTML = hoursremain < 10 ? "0" + hoursremain : hoursremain;
  minutes.innerHTML = minutesremain < 10 ? "0" + minutesremain : minutesremain;
  seconds.innerHTML = secondsremain < 10 ? "0" + secondsremain : secondsremain;

  console.log(daysremain, hoursremain, minutesremain, secondsremain);
  console.log(`Days:Hours:Minutes:Seconds`);
  console.log(`${daysremain}:${hoursremain}:${minutesremain}:${secondsremain}`);
}

// Show spinner before countDown

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run everysecond
setInterval(updateCountDown, 1000);
