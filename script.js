const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

const currentYear = new Date().getFullYear();
console.log(currentYear);

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

console.log(newYearTime);

function updateCountDown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const daysremain = Math.floor(diff / 86400000);
  const hoursremain = Math.floor((diff % 86400000) / 3600000);
  const minutesremain = Math.floor((diff % 3600000) / 60000);

  console.log(daysremain, hoursremain, minutesremain, secondsremain);
}

updateCountDown();
