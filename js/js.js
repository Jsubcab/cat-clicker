const redCat = document.getElementById("redCat");
const blackCat = document.getElementById("blackCat");
const counterBlack = document.getElementById("counter-black");
const counterRed = document.getElementById("counter-red");
let redNumCounter = 0;
let blackNumCounter = 0;
const nameRed = "Rojo";
const nameBlack = "Negro";

counterRed.innerHTML;
redCat.addEventListener('click', function(){
    redNumCounter++;
    counterRed.innerHTML = "Counter: " + redNumCounter;
});

counterRed.appendChild(nameBlack);
blackCat.addEventListener('click', function(){
    blackNumCounter++;
    counterBlack.innerHTML = "Counter: " + blackNumCounter;
});