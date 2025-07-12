// Open the birthday card
function openCard() {
  document.getElementById("envelope-screen").classList.add("hidden");
  const birthdayScreen = document.getElementById("birthday-screen");
  birthdayScreen.classList.remove("hidden");

  // Start audio
  const audio = document.getElementById("birthday-audio");
  audio.play().catch(() => {
    document.body.addEventListener("click", () => {
      audio.play();
    }, { once: true });
  });

  // Confetti burst effects (no pebbles!)
  confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });

  setTimeout(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
  }, 1000);

  setTimeout(() => {
    confetti({ particleCount: 150, spread: 120, origin: { y: 0.4 } });
  }, 2000);
}

// Scroll-reveal for photo blocks
window.addEventListener('scroll', () => {
  document.querySelectorAll('.photo-block').forEach(block => {
    const top = block.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      block.classList.add('show');
    }
  });
});

function submitName() {
  const name = document.getElementById("name-input").value.trim();
  if (name === "") {
    alert("Please enter a name!");
    return;
  }

  // Set name in greeting
  document.getElementById("name").innerText = name;

  // Show envelope screen
  document.getElementById("name-screen").classList.add("hidden");
  document.getElementById("envelope-screen").classList.remove("hidden");
}
