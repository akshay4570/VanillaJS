console.log('Drum Kit');

window.addEventListener('click',function(e){
    let audio = document.querySelector(`audio[data-key="${e.key}"]`);
    console.log(audio);
});
