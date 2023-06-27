//Variables
const   albumCovers = document.querySelectorAll('#album-art img'),
        theAudioEl = document.querySelector('audio'),
        playButton = document.querySelector('#playButton'),
        pauseButton = document.querySelector('#pauseButton'),
        rewindButton = document.querySelector('#rewindButton'),
        volSlider = document.querySelector('#volumeControl');

//functions
function loadAudio() {
    //"audio/Albatroz.mp3" this is what we are dynamically creating
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;
    theAudioEl.src = currentSrc;
    theAudioEl.load();
    playAudio();
}

function playAudio() {
    theAudioEl.play();
}

function restartAudio() {
    theAudioEl.currentTime = 0;
    playAudio();
}

function pauseAudio() {
    theAudioEl.pause();
}

function setVolume() {
    //console.log(this.value/100);
    //divide by 100 to get a floating point number, the volume property has a range of 0-1
    theAudioEl.volume = (this.value/100);
}

//Event Listeners
albumCovers.forEach(cover => cover.addEventListener('click', loadAudio));

//event listeners for custom controls
rewindButton.addEventListener('click', restartAudio);
pauseButton.addEventListener('click', pauseAudio);
playButton.addEventListener('click', playAudio);
volSlider.addEventListener('change', setVolume);