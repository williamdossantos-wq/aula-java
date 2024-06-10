//71.Escopo lexico

/*const nome = 'william';
function falaNome () {
    console.log(nome);

}
falaNome();

function usaFalaNome() {
    falaNome()
}
usaFalaNome();*/

//72.Closures


function retornaFuncao() {
    const nome = 'william';
    return function() {
        return nome;
    };
};
const funcao = retornaFuncao();
console.log(funcao)




