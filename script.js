document.addEventListener("DOMContentLoaded", () => {
  // Sidebar
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".toggle-btn");

  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("expanded");
    });
  }

  // Cuenta regresiva
  const countdown = () => {
    const targetDate = new Date("December 18, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (timeRemaining >= 0 && daysEl && hoursEl && minutesEl && secondsEl) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      daysEl.textContent = days.toString().padStart(2, "0");
      hoursEl.textContent = hours.toString().padStart(2, "0");
      minutesEl.textContent = minutes.toString().padStart(2, "0");
      secondsEl.textContent = seconds.toString().padStart(2, "0");
    } else if (timeRemaining < 0) {
      const timer = document.querySelector(".countdown-timer");
      if (timer) timer.textContent = "¡El 18 de diciembre ya llegó!";
    }
  };

  setInterval(countdown, 1000);
  countdown();

  // Botón de felicitaciones
  const button = document.getElementById("click-here-button");
  const message = document.getElementById("congratulations-message");
  const giftButtonContainer = document.getElementById("gift-button-container");

  if (button && message && giftButtonContainer) {
    const hasClicked = localStorage.getItem("buttonClicked");

    if (hasClicked) {
      message.classList.remove("hidden");
      giftButtonContainer.classList.remove("hidden");
      button.classList.add("hidden");
    }

    button.addEventListener("click", () => {
      message.classList.remove("hidden");
      giftButtonContainer.classList.remove("hidden");
      button.classList.add("hidden");
      localStorage.setItem("buttonClicked", true);
    });
  }

  // Carousel
  const track = document.querySelector(".carousel-track");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  if (track && prevButton && nextButton) {
    const slides = [];
    for (let i = 1; i <= 30; i++) {
      const slide = document.createElement("li");
      slide.classList.add("carousel-slide");
      const img = document.createElement("img");
      img.src = `assets/foto - ${i}.jpeg`;
      img.alt = `Foto ${i}`;
      slide.appendChild(img);
      track.appendChild(slide);
      slides.push(slide);
    }

    let currentIndex = 0;

    const updateCarousel = () => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    window.addEventListener("resize", updateCarousel);
  }

  const qrContainer = document.getElementById("qrcode");
const currentURL = "https://delri16.github.io/101uch4/index.html"; // Obtiene la URL actual
QRCode.toCanvas(qrContainer, currentURL, {
  width: 200, // Tamaño del QR
  margin: 1,
  color: {
    dark: "#000000", // Color del QR
    light: "#ffffff", // Fondo del QR
  },
});
});