/*const data = new Date(1715697872045);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());
console.log(data.toString());
console.log(Date.now());*/
function zeroAesquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function FormataData(data){
const dia = zeroAesquerda(data.getDate());
const mes = zeroAesquerda(data.getMonth() + 1);
const ano = zeroAesquerda(data.getFullYear());
const hora = zeroAesquerda(data.getHours());
const min = zeroAesquerda(data.getMinutes());
const seg = zeroAesquerda(data.getSeconds());

return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`;
}
const data = new Date();

const dataBrasil = FormataData(data);
console.log(dataBrasil);