const container = document.querySelector('.container')
const div = document.createElement('div');


const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'div', texto: 'bloco 2'},
    {tag:'footer', texto: 'roodapé 3 qual que coisa'},
    {tag:'section', texto: 'seção 4'},
];


for ( let e = 0 ; e < elementos.length; e++){
    let{ tag, texto} = elementos[e];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
    
};

container.appendChild(div);

