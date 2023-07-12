
let bg = document.querySelector('#particles-js');
console.log(bg);

document.addEventListener("keydown", (event) => {
    bg.style.backgroundColor = getRandomColor();
    let key = event.key;
    playMusic(key)
})

function getRandomColor() {
    let letters = "0123456789ABCDEF";

    let color = "#";
    for(let i = 1; i <= 6 ;i++){
        color = color + letters [Math.floor(Math.random() * letters.length)]
    }
    return color
 }
 function playMusic(key) {
    if (key === "t") {
        let audio = new Audio("path.mp3");
        audio.play();
    }
    else if (key === "n") {
        let audio = new Audio("le-noir.mp3");
        audio.play();
    }
    if (key === "l") {
        let audio = new Audio("pp.mp3");
        audio.play();
    }
    if (key === "k") {
        let audio = new Audio("pl.mp3");
        audio.play();
    }

}





