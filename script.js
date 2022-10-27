let h1 = document.querySelector('h1');
let form = document.querySelector('#form');
let input1 = document.querySelector('#num1');
let input2 = document.querySelector('#num2');
let boton = document.querySelector('#botonCalcular');
let resultado = document.querySelector('#result');


form.addEventListener('submit', buttonOnClick);

function buttonOnClick(event) {
    event.preventDefault();
    let valorFinal = parseInt(input1.value)  + parseInt(input2.value);
    resultado.innerText = "El resultado de la suma es " + valorFinal;
}

