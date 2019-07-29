const redCat = document.getElementById("redCat");
const blackCat = document.getElementById("blackCat");
const counterBlack = document.querySelector(".counter-black-cat");
const counterRed = document.querySelector(".counter-red-cat");

let redNumCounter = 0;
let blackNumCounter = 0;
let node = document.createElement("p");
let node2 = document.createElement("p");

let rojo = document.createTextNode('Kira');
node2.appendChild(rojo);
counterRed.appendChild(node2);

redCat.addEventListener('click', function(){
    redNumCounter++;
    document.getElementById('counter-red').innerHTML = "Counter: " + redNumCounter;
});


let negro = document.createTextNode('Pituca');
node.appendChild(negro);
counterBlack.appendChild(node);

blackCat.addEventListener('click', function(){
    blackNumCounter++;
    document.getElementById('counter-black').innerHTML = "Counter: " + blackNumCounter;
});