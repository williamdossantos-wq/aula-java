function meuIMC (){
const form = document.querySelector('form');
const resultado = document.querySelector('resultado');
function recebeEventoform (evento){
    evento.preventDefault()

const peso = form.querySelector('.peso-imc');
const altura = form.querySelector('.altura-imc');



}

resultado.innerHTML += 
form.addEventListener('submit',recebeEventoform);
}
meuIMC()