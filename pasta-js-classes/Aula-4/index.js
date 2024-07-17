class ControleRemoto{
    constructor(tv) {
this.tv = tv;
this.volume = 0;
    }
    //metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    // Metodo estatico
    static SOME(x, Y) {
       return x + Y;
    }
}
const controle1 = new ControleRemoto('reg')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()

console.log(controle1)
console.log(ControleRemoto.SOME(5, 5))