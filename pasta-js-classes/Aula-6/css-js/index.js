class ValidaFormulario{
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
    eventos() {
this.formulario.addEventListener('submit', e => {
    this.handleSubmit(e);
})

    }
    handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
}
camposSaoValidos() {
let valid = true;
for(let errorText of this.formulario.querySelectorAll('.error-text')){
    errorText.remove();
}
for(let campo of this.formulario.querySelectorAll('.Validado')) {
   
    const label = campo.previousElementSibling.innerText;
   if(!campo.value){
    this.criaError(campo,`Campo '${label}' não pode estar vazio` );
    valid = false;
   }
   if(campo.classList.contains('cpf')){
    if(!this.validaCpf(campo)) valid = false;
   }
}
}
validaCpf(campo) {
    const cpf = new Validacpf(campo.value)
    if(!cpf.Valida()){
this.criaError(campo,'CPF invalido')
return false;
    }
    return true;
}
criaError(campo, msg){
const div = document.createElement('div');
div.innerHTML = msg;
div.classList.add('error-text');
campo.insertAdjacentElement('afterend', div)
}
}
const valida = new ValidaFormulario()