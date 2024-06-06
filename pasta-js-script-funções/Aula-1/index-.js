// Desclaração de função (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oiii');
};

// First- class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.')
};
souUmDado();

function eliu(){
    console.log('auuii')
}

function executaFuncao(funcao) {
    console.log('aqii')
funcao();
console.log('willima')
}
executaFuncao(souUmDado);
executaFuncao(eliu)

const funcaoArrow = () => {
    console.log('Sou uma Arrow fanction')
}
funcaoArrow();
executaFuncao(funcaoArrow);

//Dentro de objeto
const obj = {
    falar: function() {
        console.log('Estou falando')
    }
}
obj.falar();