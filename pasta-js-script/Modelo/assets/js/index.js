 const form = document.querySelector('.formulario');
   
form.addEventListener('submit', function (evento){
    evento.preventDefault();
const inputPeso = evento.target.querySelector('.peso-imc');
const inputAltura = evento.target.querySelector('.altura-imc');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if (!peso){
setResultado('Peso invalido', false);
return;
}
if (!altura){
  setResultado('Altura invalida', false);
  return;
}

const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);

const msg = `Seu imc é ${imc} (${nivelImc}).`;
setResultado (msg, true);


});

function getImc (peso, altura){
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
  }
  
function getNivelImc (imc){
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 
  'Obesidade grau II', 'Obesidade grau III', 'Como que tu ta vivo??!!!!!'];
  if (imc >= 50.9) {
return nivel [6];}

  if (imc >= 39.9){
    return nivel[5];

  }
   if(imc >= 34.9){
return nivel[4];

  }
   if(imc >= 29.9){
    return nivel[3];

  }
   if(imc >= 24.9){
    return nivel[2];

  }
   if(imc >= 18.5){
    return nivel[1];

  }
   if(imc <= 18.5){
    return nivel[0];
  }

  
};

function criaP (){
    const p = document.createElement('p');
  return p;
    
}



function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
   const p = criaP();
   
if (isValid) {
  p.classList.add('paragrafo-resultado');

} else{
  p.classList.add('bad');
}


   p.innerHTML= msg;
   resultado.appendChild(p);
}
 
