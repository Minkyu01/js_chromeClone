const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();

  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

getClock();
setInterval(getClock, 1000);
