/* Go from Page 1 to Page 2 */
function goToHome() {
  document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
}

/* Countdown */
const weddingDate = new Date("2026-01-31T06:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "❤️ IT'S TODAY ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} : ${hours} : ${mins} : ${secs}`;
}, 1000);
