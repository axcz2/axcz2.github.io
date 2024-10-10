// Código JavaScript para manejar la descarga del juego
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download');

    downloadButton.addEventListener('click', () => {
        // URL de descarga del archivo en GitHub (cambiar según sea necesario)
        const downloadUrl = 'https://github.com/tuusuario/leapster/raw/main/Leapster.zip';

        // Redirigir a la URL de descarga
        window.location.href = downloadUrl;
    });
});


