const container = document.querySelector('.container')
const div = document.createElement('div');


const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'div', texto: 'Frase 2'},
    {tag:'footer', texto: 'Frase 3'},
    {tag:'section', texto: 'Frase 4'},
];


for ( let e = 0 ; e < elementos.length; e++){
    let{ tag, texto} = elementos[e];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
    
};

container.appendChild(div);

