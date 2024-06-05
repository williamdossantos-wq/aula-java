const inputTarefa = document.querySelector('.input-tarefa'); 
const btnTarefa = document.querySelector('.btn-tarefa'); 
const tarefas = document.querySelector('.tarefas');

function criaLi (){
    const li = document.createElement('li');
    return li;
};

inputTarefa.addEventListener('keypress', function (e){
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
};
});

function limpaTarefa(){
    inputTarefa.value = '';
    inputTarefa.focus();
}
function criaTarefa (textoInput){
const li = criaLi();
li.innerText = textoInput;
tarefas.appendChild(li)
limpaTarefa();
criaBotãoApagar(li);
salvarTarefas();
};

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

 function criaBotãoApagar(li){
    li.innerText += ' ';
const botaoApagar = document.createElement('button');
botaoApagar.innerText = 'Apagar';
botaoApagar.setAttribute('class', 'apagar');
botaoApagar.setAttribute('title', 'Apagar essa tarefa')
li.appendChild(botaoApagar);
 };

 document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('apagar')){
       el.parentElement.remove();
       salvarTarefas();
    }
 });
 function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDetarefas = [];
    for (let tarefa of liTarefas){
       let tarefaTexto = tarefa.innerText;
       tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
       listaDetarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDetarefas);
localStorage.setItem('tarefas', tarefasJSON);
 }

 function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDetarefas = JSON.parse(tarefas);
 for (let tarefa of listaDetarefas){
    criaTarefa(tarefa);
 }

 };
 adicionarTarefasSalvas();