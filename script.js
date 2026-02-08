
const terminal = document.getElementById("terminal-text");

const sounds = {
  open: new Audio("sounds/open.wav"),
  close: new Audio("sounds/close.wav"),
  click: new Audio("sounds/click.wav"),
  boot: new Audio("sounds/boot.wav"),
  error: new Audio("sounds/error.wav")
};

function logTerminal(text) {
  terminal.textContent += `> ${text}\n`;
  terminal.scrollTop = terminal.scrollHeight;
}

function openWin(id) {
  document.getElementById(id).style.display = "block";
  sounds.open.play();
  logTerminal(`Opened ${id}`);
}

function closeWin(id) {
  document.getElementById(id).style.display = "none";
  sounds.close.play();
  logTerminal(`Closed ${id}`);
}

function openChrome() {
  openWin("win-chrome");
  logTerminal("Chrome.exe launched");
  logTerminal("Loading https://github.com/Tylers-Games");
}

function openLink(url) {
  sounds.click.play();
  logTerminal(`External link: ${url}`);
  window.open(url, "_blank");
}

function updateClock() {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString();
}

setInterval(updateClock, 1000);

setTimeout(() => {
  sounds.boot.play();
  document.getElementById("boot").style.display = "none";
  document.getElementById("desktop").classList.remove("hidden");
  logTerminal("System ready.");
}, 2000);