//Factory function (Função fabrica)
//Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //Getter
       get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        fala: function (assunto) {
            return `${nome} esta ${assunto}`
        },

        altura: a,
        peso: p,

imc() {
    const indice = this.peso / (this.altura ** 2);
    return indice.toFixed(2)
},
//setter
set nomeCompleto(valor){
valor = valor.split(' ');
this.nome = valor.shift();
this.sobrenome = valor.join(' ');
}
    };
};

const p1 = criaPessoa('William', 'Dos Santos', 1.68, 106);
const p2 = criaPessoa('maria', 'silva', 1.65, 60)
const p3 = criaPessoa('joão', 'Da silva', 1.75, 75)
console.log(p1.imc());
console.log(p2.imc())
console.log(p2.fala('falando sobre html'))
console.log(`O imc de ${p1.nomeCompleto} é ${p1.imc()}`);
console.log(`${p3.nomeCompleto} esta falando sobre html`)
p3.nomeCompleto = 'JOAO rodriges da silva',
console.log(p3.nomeCompleto)