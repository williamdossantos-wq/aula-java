/*const nome = 'william';
let i = 0;

while (i < nome.length){
    console.log(nome[i]);
    i++
};*/
//console.log('para aqui');
function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor (r)
}
const min = 1;
const max = 20;

let rar = random(min, max);



while ( rar !== 7){
    rar = random(min, max);
    console.log(rar);
}