for (let i = 0; i <= 100 ; i++){
    console.log(i, fissbuzz(i))
}
function fissbuzz(numero){
    if (numero % 3 === 0 && numero % 5 ===0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    if (numero % 2 === 0) return 'isso'
    if (numero % 1 === 0) return 'mesmoooo'
}