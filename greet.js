let words = ["Hello!", "Hi!", "Olá!", "Greetings!"];
let nr = Math.floor(Math.random() * 10 % words.length);

const text = words[nr].split("");
let res = document.querySelector(".greet");
let i = 0;
let timer = setInterval(onTick, 150);

function onTick() {
    res.innerHTML += "<span>" + text[i++];
    if( i == text.length) {
        clearInterval(timer);
        timer = null;
        return;
    }
}