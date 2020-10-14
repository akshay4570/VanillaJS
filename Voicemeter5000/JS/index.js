console.log('Playingwith speech synthesis');

// catching hold of many selectors and buttons

let msg = new SpeechSynthesisUtterance();
let voices = [];
let voicedropdown = document.querySelector('[name="voice"]');
let options = document.querySelectorAll('[type="range"], [name="text"]');
let speakButton = document.getElementById('speak');
let stopButton = document.getElementById('stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices();
    voicedropdown.innerHTML = voices
                    .filter(voice => voice.lang.includes('en'))
                    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
                    .join('');
}

function setVoices(){
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true){
    speechSynthesis.cancel();
    if(startOver)
        speechSynthesis.speak(msg);
}

function setOption(){
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged',populateVoices);
voicedropdown.addEventListener('change', setVoices);
options.forEach(option => option.addEventListener('change',setOption));
speakButton.addEventListener('click',toggle);
stopButton.addEventListener('click',() => toggle(false));