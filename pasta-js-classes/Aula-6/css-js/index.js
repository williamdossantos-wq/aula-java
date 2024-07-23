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
    const senhasValidas = this.senhasSaoValidas();
    if(camposValidos && senhasValidas) {
        alert('formulario enviado')
        this.formulario.submit();
    }
}
senhasSaoValidas() {
let valid = true;
const senha = this.formulario.querySelector('.senha');
const repetirSenha = this.formulario.querySelector('.repetir-senha')
if(senha.value !== repetirSenha.value) {
valid = false;
this.criaError(senha,'Campos senha e repetir senha precisam ser iguais');
this.criaError(repetirSenha,'Campos senha e repetir senha precisam ser iguais')
}
if(senha.value.length < 6 || senha.value.length > 12 ){
    valid = false;
    this.criaError(senha,'A senha precisa ter entre 6 e 12 caracteres')
}

return valid;
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
   if(campo.classList.contains('usuario')){
    if(!this.validaUsuario(campo)) valid = false;
   }
  
}
return valid;
}
validaCpf(campo) {
    const cpf = new Validacpf(campo.value)
    if(!cpf.Valida()){
this.criaError(campo,'CPF invalido')
return false;
    }
    return true;
}
validaUsuario(campo){
    const usuario =  campo.value;
    let valid = true;
    if(usuario.length < 3 || usuario.length > 12) {
        this.criaError(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
       valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
        this.criaError(campo, 'Nome de Usuario precisa conter apenas letras e/ou numeros  ')
       valid = false;
    }
return valid;
}
criaError(campo, msg){
const div = document.createElement('div');
div.innerHTML = msg;
div.classList.add('error-text');
campo.insertAdjacentElement('afterend', div)
}
}
const valida = new ValidaFormulario()