const nomes = ['william', 'julia', 'fenarda', 'diego'];
nomes[2] = 'joao';
const remopri = nomes.shift();
delete nomes[2];
const novo = [...nomes];
const removido = novo.pop();
const novo2 = nomes.slice(0, 3)
nomes.push('jose')
nomes.unshift('wallece')
console.log(nomes.length);
console.log(novo)
console.log(removido)
console.log(remopri)
console.log(nomes)
console.log(novo2)

const nomes3 = 'will rebeca diego';
const nomes4 = nomes3.split(' ');
console.log(nomes4);