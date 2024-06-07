// Return é diferente de console.log(console.log so exibe a função) 
// Retorna um valor
// Termina a função

/*function soma(a, b) {
    return a + b
}

function soma2(a, b) {
    console.log(a + b);
}
soma2(5, 5); */

/*document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});*/

/*
function criaPessoa( nome, sobrenome) {
return {nome, sobrenome};
}

const p1 = criaPessoa( 'william', 'santos');
const p2 = {
    nome: 'luiz',
    sobrenome: 'sousa'
};
console.log(  p1);
console.log(  p2)*/

function falaFrase(comeco ) {
    function falaResto(resto){
        return  resto + ' ' + comeco ;
    }
    return falaResto
};
const olaMundo = falaFrase('Ola');
console.log(olaMundo('mundo111'));

/*
function duplica (n) {
    return n * 2;
};
function triplica (n) {
    return n * 3;
};
function quadruplica (n) {
    return n * 4;
};


console.log(duplica(2))
console.log(triplica(3))
console.log(quadruplica(4))*/

function criaMultiplicador(multiplicador){
    return function (n) {
        return n - multiplicador
    }
}
const duplica = criaMultiplicador(3)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)


console.log(duplica(2))
console.log(triplica(3))
console.log(quadruplica(4))