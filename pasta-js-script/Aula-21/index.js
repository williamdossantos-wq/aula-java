
/*try{
    console.log(oiii)}
    catch(err) {
        console.log('oiii não é definido');
        console.log(err);
    }*/

    function soma(x, y){
        if(typeof x !== 'number' || typeof y !== 'number'){
            throw('x e y precisam ser numeros')
        }
        return x + y;
    } 
    try{
    console.log(soma(20 , 30))
    console.log(soma(20 , '30'))}catch(error){
console.log('alguma coisa amigavel para o usuario')
    }