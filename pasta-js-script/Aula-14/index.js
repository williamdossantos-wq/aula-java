const frutas = ['pera', 'maça', 'uva', 'melancia'];

for ( let seila in frutas){
    console.log(seila, frutas[seila]);
};


const pessoa = {
    nome:'Willaim',
    sobrenome: 'Moreira',
    idade: 20
};
for ( let chave in pessoa){
    console.log(chave, pessoa[chave]);
}