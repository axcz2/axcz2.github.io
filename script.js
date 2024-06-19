document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const encryptForm = document.getElementById('encryptForm');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const logoutButton = document.getElementById('logoutButton');

    // Registrar usuario
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Usuario registrado exitosamente');
            window.location.href = 'login.html';
        });
    }

    // Iniciar sesión
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');
            if (username === storedUsername && password === storedPassword) {
                sessionStorage.setItem('loggedInUser', username);
                window.location.href = 'encrypt.html';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    }

    // Mostrar nombre de usuario en la página de encriptación y cerrar sesión
    if (usernameDisplay) {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            window.location.href = 'login.html';
        } else {
            usernameDisplay.textContent = `Usuario: ${loggedInUser}`;
        }
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            sessionStorage.removeItem('loggedInUser');
            window.location.href = 'login.html';
        });
    }

    // Encriptar palabra
    if (encryptForm) {
        encryptForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const word = document.getElementById('wordToEncrypt').value;
            const encryptedWord = btoa(word);
            document.getElementById('encryptedWord').textContent = `Palabra encriptada: ${encryptedWord}`;
            document.getElementById('encryptionAnimation').classList.add('encrypting');
        });
    }
});
