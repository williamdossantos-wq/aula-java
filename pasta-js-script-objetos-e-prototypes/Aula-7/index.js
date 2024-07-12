//99.Polimorfismo
function Conta(agencia, conta, saldo) {
this.agencia = agencia;
this.conta = conta;
this.saldo = saldo;
};
Conta.prototype.sacar = function(valor){
if( valor > this.saldo ) {
this.verSaldo();
console.log(`saldo insuficiente`);
return;
};
this.saldo -= valor;
this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
console.log(`Ag/C: ${this.agencia}/ ${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this,agencia, conta, saldo);
    this.limite = limite;
};
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor  > (this.saldo + this.limite) ) {
        console.log(`saldo insuficiente: ${this.saldo}`)
    
    return;
    };
    this.saldo -= valor;
    this.verSaldo();
    };

const contaC = new ContaCorrente('sa', 32, 0, 100)

contaC.sacar(200)
contaC.sacar(20)
/*const conta1 = new Conta('brandesco', 21,  100);
conta1.depositar(10);
conta1.sacar(200);*/





