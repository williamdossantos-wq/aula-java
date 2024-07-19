//exemplo do professor
//705.484.450-52 070.987.720-03
class Validacpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    éSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    geraNovoCpf() {
        const cpfSemdigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemdigitos);
        const digito2 = this.geraDigito(cpfSemdigitos + digito1);
        this.novoCpf = cpfSemdigitos + digito1 + digito2;
    }
    geraDigito(cpfSemdigitos) {
        let total = 0;
        let reverso = cpfSemdigitos.length + 1;
        for (let strindNumera of cpfSemdigitos) {
            total += reverso * Number(strindNumera);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequencia()) return false;
      this.geraNovoCpf()
        return this.novoCpf === this.cpfLimpo;
    }
}


const validacpf = new Validacpf('705.484.450-52');

if(validacpf.valida()) {
    console.log('cpf Valido')
} else {
    console.log('cpf Invalido')
}
