document.getElementById('accept-button').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'screamer.html';
});

document.getElementById('deny-button').addEventListener('click', function() {
    window.location.href = 'screamer.html';
});
