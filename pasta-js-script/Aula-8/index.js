const data = new Date();
const diadaSemana = data.getDay();
let diaSemanaTexto;

switch (diadaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feiara';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;
};

const seuMes = data.getMonth();
let mesTexto;

switch (seuMes) {
    case 0:
        mesTexto = 'janeiro';
        break;
    case 1:
        mesTexto = 'fevereiro';
        break;
    case 2:
        mesTexto = 'março';
        break;
    case 3:
        mesTexto = 'abril';
        break;
    case 4:
        mesTexto = 'maio';
        break;
    case 5:
        mesTexto = 'junho';
        break;
    case 6:
        mesTexto = 'julho';
        break;
    case 7:
        mesTexto = 'agosto';
        break;
    case 8:
        mesTexto = 'setembro';
        break;
    case 9:
        mesTexto = 'outubro';
        break;
    case 10:
        mesTexto = 'novembro';
        break;
    case 11:
        mesTexto = 'dezembro';
        break;

};

const dia = data.getDate();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();



/*if (diadaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if(diadaSemana === 1){
    diaSemanaTexto = 'Segunda';
}else if(diadaSemana === 2){
    diaSemanaTexto = 'Terça';
}else if(diadaSemana === 3){
    diaSemanaTexto = 'Quarta';
}else if(diadaSemana === 4){
    diaSemanaTexto = 'Quinta';
}else if(diadaSemana === 5){
    diaSemanaTexto = 'Sexta';
}else if(diadaSemana === 6){
    diaSemanaTexto = 'Sabado';
}*/

console.log( `${diaSemanaTexto} , ${dia} de  ${mesTexto} de ${ano}  ${hora}:${minutos}`); 