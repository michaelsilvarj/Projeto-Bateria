//Observa o HTML se haverá algum evento de teclado
document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLowerCase());
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.play();
    }

    if(keyElement){
        document.querySelector()
    }
}