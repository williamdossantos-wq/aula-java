 const form = document.querySelector('.formulario');
   
form.addEventListener('submit', function (evento){
    evento.preventDefault();
const inputPeso = evento.target.querySelector('.peso-imc');
const inputAltura = evento.target.querySelector('.altura-imc');

console.log(inputPeso , inputAltura);
});

function criaP (){
    const p = document.createElement('p');
  return p;
    
}

function setResultado (msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
   const p = criaP();

}
 
