function removeAnimation(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    // OR 
    // this.classList.remove('playing');

}

function playsound(e) {
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    // const audio = new Audio("sounds/clap.wav");
    const key = document.querySelector(`div[data-key="${e}"]`);
    if (audio === null) return;

    key.classList.add("playing");
    audio.currentTime = 0; /*retstarts audio. This is not required if we create a new audio object each 
    time as above(but we will have to use switch-case depending on which key is pressed)*/
    audio.play();
}

document.addEventListener('keydown', function (event) {
    playsound(event.key.toLowerCase()); // to play sound even when capsLock is on
});

let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeAnimation));
