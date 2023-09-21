window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
})