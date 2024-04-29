function meunegocio() {
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
const pessoas = [];


function recebeEventoform (evento){
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');    
    console.log(pessoas);

    pessoas.push({
        nome:nome.value,
        sobrenome:sobrenome.value,
        peso:peso.value,
        altura:altura.value
    })
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
}

form.addEventListener('submit', recebeEventoform);
}
meunegocio()
