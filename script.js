console.log("welcome to spotify");
let songIndex= 0;
let audioElement = new Audio("Sach Keh Raha Hai.mp3");
let play = document.getElementById('class2');
let myprogress = document.getElementById('range');
let gif = document.getElementById('gifid');
let songItems = Array.from(document.getElementsByClassName('song'));

let songs= [{songName:"Sach keh raha hai",filepath:"Sach Keh Raha Hai.mp3",coverPath:"image.png"},
{songName:"Pehle Bhi Main",filepath:"Pehle-Bhi-Main.mp3",coverPath:"pehle bhi main.jpeg"},
{songName:"Satranga",filepath:"Satranga.mp3",coverPath:"satranga.jpg"}
]


play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogress.value=progress;
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime = ((myprogress.value * audioElement.duration)/100);
})
