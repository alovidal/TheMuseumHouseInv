let isOpen = false;

function toggleLetter() {
    const container = document.querySelector('.envelope-container');
    const audio = document.getElementById('bg-music');

    isOpen = !isOpen;
    container.classList.toggle('open', isOpen);

    if (audio) {
        if (isOpen) {
            audio.currentTime = 0;
            audio.play().catch(() => {
                console.warn("No se pudo reproducir el audio automáticamente.");
            });
        } else {
            audio.pause();
        }
    }
}
