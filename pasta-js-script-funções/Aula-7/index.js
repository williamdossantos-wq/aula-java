//Factory function (Função fabrica)
//Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala: function (assunto) {
            return `${nome} esta ${assunto}`
        },
        altura: a,
        peso: p,
imc() {
    const indice = this.peso / (this.altura ** 2);
    return indice.toFixed(2)
}

    };
};

const p1 = criaPessoa('William', 'sobrenome', 1.68, 106);
const p2 = criaPessoa('maria', 'silva', 1.65, 60)
console.log(p1.imc());
console.log(p2.imc())
console.log(p2.fala('falando sobre html'))