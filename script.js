// Inicializar el temporizador
let timeLeft = 5; // Tiempo en segundos
const timerText = document.getElementById("timer");
const downloadBtn = document.getElementById("download-btn");

// Función para contar regresivamente
const countdown = setInterval(() => {
    if (timeLeft > 0) {
        timerText.textContent = timeLeft;
        timeLeft--;
    } else {
        clearInterval(countdown);
        // Habilitar el botón de descarga
        downloadBtn.removeAttribute("disabled");
        downloadBtn.style.pointerEvents = "auto"; // Habilitar eventos de puntero
        downloadBtn.style.opacity = "1"; // Asegurarse de que sea visible
        timerText.textContent = "¡Ya puedes descargar el juego!";
    }
}, 1000);
