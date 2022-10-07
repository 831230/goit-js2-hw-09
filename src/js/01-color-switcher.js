const body = document.querySelector("body");
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timerId = null; 

function changeBodyColor(){
  timerId = setInterval(() => {
    const actualColor=getRandomHexColor();
    body.style.backgroundColor=actualColor;
  }, 1000);
  startBtn.disabled=true;
  stopBtn.disabled=false;
};

function stopChangeBodyColor(){
  clearInterval(timerId);
  startBtn.disabled=false;
  stopBtn.disabled=true;
};

startBtn.addEventListener("click", changeBodyColor);
stopBtn.addEventListener("click", stopChangeBodyColor);