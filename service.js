// Optional: Ticking sound toggle
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  // Create audio element
  const tickingSound = new Audio("sounds/ticking.mp3"); // You need to provide this file
  tickingSound.loop = true;

  let isPlaying = false;

  logo.style.cursor = "pointer";
  logo.title = "Click to toggle ticking sound";

  logo.addEventListener("click", () => {
    if (isPlaying) {
      tickingSound.pause();
    } else {
      tickingSound.play();
    }
    isPlaying = !isPlaying;
  });
});
