// Inicializar el temporizador
let timeLeft = 5;
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
        timerText.textContent = "¡Ya puedes descargar el juego!";
    }
}, 1000);
