var buttons = document.querySelectorAll(".drum");
var noBtn = document.querySelectorAll(".drum").length;
var audioArr = ['sounds/tom-1.mp3' , 'sounds/tom-2.mp3' , 'sounds/tom-3.mp3' , 'sounds/tom-4.mp3' , 'sounds/tom-5.mp3' , 'sounds/tom-6.mp3' , 'sounds/tom-7.mp3'];

function addSound(num1){
    document.querySelectorAll(".drum")[num1].addEventListener("click", function() {
        var audio = new Audio(audioArr[num1]);
        audio.play();
        //console.log("Hello");
    });
}

for(var i=0; i < noBtn; i++){
    addSound(i);
}

document.addEventListener("keypress", function(event){
//console.log(event.code);
switch(event.code){
    case "KeyW" :   var audio = new Audio(audioArr[0]);
                    audio.play();
                    break;
    case "KeyA" :   var audio = new Audio(audioArr[1]);
                    audio.play();
                    break;
    case "KeyS" :   var audio = new Audio(audioArr[2]);
                    audio.play();
                    break;
    case "KeyD" :   var audio = new Audio(audioArr[3]);
                    audio.play();
                    break;
    case "KeyJ" :   var audio = new Audio(audioArr[4]);
                    audio.play();
                    break;
    case "KeyK" :   var audio = new Audio(audioArr[5]);
                    audio.play();
                    break;
    case "KeyL" :   var audio = new Audio(audioArr[6]);
                    audio.play();
                    break;
    
}
});