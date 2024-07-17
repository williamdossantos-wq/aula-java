class dispositivoEletronico{
constructor(nome) {
this.nome = nome;
this.ligado = false;
}
ligar() {
    if(this.ligado) {
        console.log(`${this.nome} ja ligado`)
        return;
    }
    this.ligado = true;
}
desligado() {
    if(!this.ligado) {
        console.log(`${this.nome} ja desligado`)
        return;
    }
    this.ligado = false;
}
}

class Smartphone extends dispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;

    }
}
    class Tablet extends dispositivoEletronico{
        constructor(nome, cor, modelo, temWifi){
            super(nome);
            this.cor = cor;
            this.modelo = modelo;
            this.temWifi = temWifi;
    
        }
        ligar() {
            console.log('ja ta logado bixo')
        }
}
const s1 = new Smartphone('IPhone', 'rosa' , 'ipho299');
const t1 = new Tablet('sansung', 'vermelho', 'tab4ultra', true )
s1.desligado()
console.log(s1)
t1.ligar()
console.log(t1)