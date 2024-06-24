//Método splice
//                1         2        3           4          5         6        7         8
const nomes = ['Maria', 'jonho', 'guinheme' ,'frelipe', 'rodrigo', 'sofia', 'diego', 'samuel'];

//nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos)