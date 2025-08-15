document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById("intro-overlay");
  const video = document.getElementById("intro-video");
  const main = document.getElementById("main-content");

  const fadeDuration = .7; // seconds to fade out before video ends

  video.addEventListener("timeupdate", function() {
    if (video.duration - video.currentTime <= fadeDuration && !overlay.classList.contains("hidden")) {
      overlay.classList.add("hidden");
    }
  });

  overlay.addEventListener("transitionend", function(e) {
    if (e.propertyName === "opacity" && overlay.classList.contains("hidden")) {
      overlay.style.display = "none";
      main.style.display = "";
      video.pause(); // optionally pause video early if you want
    }
  });
});
