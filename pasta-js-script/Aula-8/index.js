const data = new Date('2003-06-07');
const diadaSemana = data.getDay() ;
let diaSemanaTexto;

switch (diadaSemana) {
    case 0:
    diaSemanaTexto = 'Domingo';
    break;
     case 1:
    diaSemanaTexto = 'Segunda';
    break;
     case 2:
    diaSemanaTexto = 'Terça';
    break;
     case 3:
    diaSemanaTexto = 'Quarta';
    break;
     case 4:
    diaSemanaTexto = 'Quinta';
    break;
     case 5:
    diaSemanaTexto = 'Sexta';
    break;
     case 6:
    diaSemanaTexto = 'Sabado';
    break;
     case 7:
    diaSemanaTexto = 'Domingo';
    break;
}


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

console.log(diadaSemana, diaSemanaTexto);