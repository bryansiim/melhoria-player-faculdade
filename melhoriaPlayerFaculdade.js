document.addEventListener('keydown', function(e) {
    const video = document.querySelector('#Video_html5_api');
    if (!video) return;

    // Espaço: play/pause
    if (e.key === ' ') {
        e.preventDefault(); // Impede o scroll da página
        video.paused ? video.play() : video.pause();
    }

    // Tecla F: fullscreen
    if (e.key.toLowerCase() === 'f') {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            video.requestFullscreen();
        }
    }
});