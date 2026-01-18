const currentDiscord = "https://discord.com/users/1458117222227640495";

const steps = [
  "Initializing lookup…",
  "Checking last known account…",
  "Resolving current profile…",
  "Account found."
];

const btn = document.getElementById("discordBtn");
const terminal = document.getElementById("terminal");

btn.onclick = () => {
  btn.classList.add("btn-disabled");
  terminal.style.display = "block";
  terminal.innerHTML = "";

  steps.forEach((text, i) => {
    setTimeout(() => {
      const line = document.createElement("div");
      line.className = "line";
      line.textContent = "> " + text;
      terminal.appendChild(line);
    }, i * 800);
  });

  setTimeout(() => {
    window.open(currentDiscord, "_blank");
    btn.classList.remove("btn-disabled");
  }, steps.length * 800 + 500);
};
