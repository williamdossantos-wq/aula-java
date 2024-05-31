const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
iniciar.addEventListener('click', function (event){
   relogio.innerHTML = 'cliquei no iniciar'
})
pausar.addEventListener('click', function (event){
    alert('cliquei no pausar')
})
zerar.addEventListener('click', function (event){
    alert('cliquei no zarar')
})

setInterval(Meutimer,1000);
function Meutimer(){
    const agora = new Date ();
    const hora = agora.getHours();
const minutos = agora.getMinutes();
const segundos = agora.getSeconds();
    relogio.innerHTML =`${hora}:${minutos}:${segundos}`
}

