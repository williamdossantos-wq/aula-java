const pontuaçãoUsuario = 1000;
const nivelUsuario = pontuaçãoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';
const corUsuario = 'rosa';
const corPadrão = corUsuario || 'preta';

console.log(nivelUsuario, corPadrão);
/*if (pontuaçãoUsuario >= 1000){
    console.log('Usuario vip');
} else {
    console.log('Usuario normal');
}*/