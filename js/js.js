const boxCat = document.querySelectorAll('.box');
const redCat = document.getElementById("redCat");
const counterRed = document.querySelector(".counter-red-cat");

var cats = [{
    name: 'Frank',
    image: 'image/red-cat.svg',
    counter: 0
},
{
    name: 'Lili',
    image: 'image/red-cat.svg',
    counter: 0
},
{
    name: 'Pituca',
    image: 'image/red-cat.svg',
    counter: 0
},
{
    name: 'Kira',
    image: 'image/red-cat.svg',
    counter: 0
},
{
    name: 'Alfredo',
    image: 'image/red-cat.svg',
    counter: 0
}];

for (let name=0; name < boxCat.length; name++) {
boxCat[name].addEventListener('click', function() {
    document.querySelector('.base').style.display = 'inline';
});
}

let redNumCounter = 0;
let node2 = document.createElement("p");

let rojo = document.createTextNode('Kira');
node2.appendChild(rojo);
counterRed.appendChild(node2);

redCat.addEventListener('click', function(){
    redNumCounter++;
    document.getElementById('counter-red').innerHTML = "Counter: " + redNumCounter;
});