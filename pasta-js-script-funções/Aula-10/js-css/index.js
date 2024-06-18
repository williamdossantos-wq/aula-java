function Calculadora() {
this.display = document.querySelector('.display');

this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
};
this.capturaEnter = () => {
this.display.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        this.realizaEquacao();
    };      
});
};

this.capturaCliques = () => {
    document.addEventListener('click', evento => {
const el = evento.target;
if(el.classList.contains('btn-num')) this.addnumDisplay(el);
if(el.classList.contains('btn-clear')) this.clear();
if(el.classList.contains('btn-del')) this.delete();
if(el.classList.contains('btn-eq')) this.realizaEquacao();

    });
};

this.addnumDisplay = el => {
this.display.value += el.innerText;
this.display.focus();
};
    this.clear = () => {
        this.display.value = '';
    };
    this.delete = () => {
        this.display.value = this.display.value.slice(0,-1);
    };
    this.realizaEquacao = () => {
try{
   const conta = eval(this.display.value);
   if(!conta) {
    alert('Conta invalida');
    return;
   };
   this.display.value = conta;
} catch(e) {
alert('Conta Invalida');
return;
}

    }
};
const calculadora = new Calculadora();
calculadora.inicia();