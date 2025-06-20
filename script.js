function hamburg() {
  const nav = document.querySelector(".dropdown");
  nav.style.transform = "translateY(0)";
}

function cancel() {
  const nav = document.querySelector(".dropdown");
  nav.style.transform = "translateY(-500px)";
}
//Typewriter effect
const texts = [
    "STUDENT",
    "DESIGNER",
    "YOUTUBER"
];
let speed = 100;
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typewriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typewriter, 500);
    }
}

window.onload = typewriter;

  window.addEventListener("scroll", function () {
    const btn = document.querySelector(".back-to-top");
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

