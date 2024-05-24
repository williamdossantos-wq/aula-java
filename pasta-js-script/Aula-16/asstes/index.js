const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');

const estilos = getComputedStyle(document.body);
const backgroundBody = estilos.backgroundColor;


for (let p of ps){
p.style.backgroundColor = '#FFE4C4';
p.style.color = '#DC143C';
}