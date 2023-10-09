import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let color_transition = document.getElementById('color_transition');

let colores = [
    'rgb(255, 87, 34)',
    'rgb(156, 39, 176)',
    'rgb(33, 150, 243)',
    'rgb(76, 175, 80)',
    'rgb(255, 193, 7)',
];
let indiceActual = 0;

setInterval(function () {
    color_transition.style.color = colores[indiceActual];
    indiceActual++;

    if (indiceActual == colores.length) {
        indiceActual = 0;
    }
}, 1000);
