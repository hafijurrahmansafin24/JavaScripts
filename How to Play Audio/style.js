for (var i = 0; i < 3; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
    });
}


function audioPlay(text){
    switch(text){
            case 'A':
                var audio = new Audio("sounds/heartbeat-sound-effect.mp3");
                audio.play();
                break;


            case 'B':
                var audio = new Audio("sounds/thud-sound-effect.mp3");
                audio.play();
                break;


            case 'C':
                var audio = new Audio("sounds/wow-sound-effect.mp3");
                audio.play();
                break;
        }
}
