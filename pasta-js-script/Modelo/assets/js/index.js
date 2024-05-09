function meuImc (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    function recebeEventoform (evento){
        evento.preventDefault();

        const peso = form.querySelector('.peso-imc');
        const altura = form.querySelector('.altura-imc');
    
const imc = peso.value / (altura.value * altura.value);

function seuImc(){

    
if (imc >= 0 && imc <= 18.5 ){
    console.log(`Abaixo do peso`);
} else if (imc >= 19.0 && imc <= 24.9){
    console.log(`Peso normal`);
} else if (imc >= 25.0 && imc <= 29,9){
    console.log(`Sobrepeso`);
} else if (imc >= 30.0 && imc <= 34.9){
    console.log(`Obesidade grau I`);
} else if (imc >= 35.0 && imc <= 39.9){
    console.log(`Obesidade grau II`);
} else if (imc >= 40.0 && imc <= 50.00){
    console.log(`Obesidade grau III. tome cuidado`)
}
}
const seuresul = seuImc;
        resultado.innerHTML += `<p>o resultado é ${seuresul}</p>`

    }
        form.addEventListener('submit', recebeEventoform);
}
meuImc()