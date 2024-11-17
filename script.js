document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");
  
    // Toggle del sidebar
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("expanded");
    });
  
    // Cuenta regresiva
    const countdown = () => {
      const targetDate = new Date("December 18, 2024 00:00:00").getTime();
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining >= 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        // Actualizar solo si los elementos existen
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");
  
        if (daysEl) daysEl.textContent = days.toString().padStart(2, "0");
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, "0");
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, "0");
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, "0");
      } else {
        const timer = document.querySelector(".countdown-timer");
        if (timer) timer.textContent = "¡El 18 de diciembre ya llegó!";
      }
    };
  
    // Actualizar la cuenta regresiva cada segundo
    setInterval(countdown, 1000);
    countdown(); // Llamar inmediatamente para evitar retraso



    const button = document.getElementById("click-here-button");
  const message = document.getElementById("congratulations-message");
  const giftButtonContainer = document.getElementById("gift-button-container");

  // Verificar si ya se tocó el botón
  const hasClicked = localStorage.getItem("buttonClicked");

  if (hasClicked) {
    // Si ya se tocó, mostrar el mensaje y el botón de regalo
    message.classList.remove("hidden");
    giftButtonContainer.classList.remove("hidden");
    button.classList.add("hidden");
  }

  // Agregar evento al botón principal
  button.addEventListener("click", () => {
    // Mostrar el mensaje de felicitaciones y el botón de regalo
    message.classList.remove("hidden");
    giftButtonContainer.classList.remove("hidden");
    button.classList.add("hidden");

    // Guardar en localStorage que se tocó el botón
    localStorage.setItem("buttonClicked", true);
  });
});