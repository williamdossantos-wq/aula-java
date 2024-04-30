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
    const anime = form.querySelector('.anime');

    pessoas.push({
        nome:nome.value,
        sobrenome:sobrenome.value,
        peso:peso.value,
        altura:altura.value,
        anime:anime.value
    })
    console.log(pessoas);

    resultado.innerHTML += `<p> Nome: ${nome.value} ${sobrenome.value}<br/> Peso: ${peso.value} <br>Altura: ${altura.value}
    <br> ${anime.value}</p>`
}

form.addEventListener('submit', recebeEventoform);
}
meunegocio()
