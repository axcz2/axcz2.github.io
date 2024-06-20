function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

document.getElementById('accept-button').addEventListener('click', function(event) {
    event.preventDefault();
    enterFullscreen(document.documentElement);
    window.location.href = 'screamer.html';
});

document.getElementById('deny-button').addEventListener('click', function(event) {
    event.preventDefault();
    enterFullscreen(document.documentElement);
    window.location.href = 'video.html';
});
