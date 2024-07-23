//705.484.450-52 070.987.720-03
class Validacpf{
    constructor(cpfEnviado){
Object.defineProperty(this,'cpfLimpo',{
  writable:false,
  enumerable:true,
  configurable:false,
value: cpfEnviado.replace(/\D+/g,'')
    }
);
}
}

 Validacpf.prototype.Valida = function() {
    
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequecia()) return false;

            const cpfParcial = this.cpfLimpo.slice(0,-2);
            const digito1 = this.criaDigito(cpfParcial);
            const digito2 = this.criaDigito(cpfParcial + digito1);
            const novocpf = cpfParcial + digito1 + digito2;
            return novocpf === this.cpfLimpo;
           
 
};

Validacpf.prototype.criaDigito = function (cpfParcial)
{
const cpfArray = Array.from(cpfParcial);
let regressivo = cpfArray.length + 1;
const total = cpfArray.reduce(function(ac, val) {
    ac += (regressivo * Number(val));
    regressivo --;
    return ac;
}, 0);
const digito = 11 - (total % 11);
return digito > 9 ? '0' : String(digito)
}


Validacpf.prototype.isSequecia = function () {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }



const cpf = new Validacpf('705.484.450-52');

/*
if(cpf.Valida()) {
console.log('cpfValido')
} else (
    console.log('cpfInvalido')
)*/