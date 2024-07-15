const falar = { falar() {
        console.log(`${this.nome} esta falando`)
    },
};
const comer = { comer() {
    console.log(`${this.nome} esta comendo`)
},
};
const beber = {  beber() {
    console.log(`${this.nome} esta bebendo`)
}
};
const pessoaPrototype = Object.assign({...beber, ...falar , ...comer}) ;

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome:{value: nome},
        sobrenome:{value: sobrenome}
    });
};

const p1 = criaPessoa('william', 'moreira');
const p2 = criaPessoa('maria', 'rosa')
console.log(p1)
console.log(p2)