/*
 Aritméticos
    () 
    + adição / concatenação
    - / * 
    ** potenciação
    % resto da divião
    INCREMENTO = ++
    DECREMENTO = --
    Operadores de atribuição
    NAN - NOT A NUMBER / parseInt (inteiro), parseFloat (decimais) / Number 
*/
const num1 = 5;
const num = 3;
console.log( num1 + num)
console.log( num1 * num)
console.log( num1 / num)
console.log( num1 - num)
console.log( num1 ** num)
console.log( num1 % num)
console.log( num1 + num * ( num1 - num / num))

let contador = 4;
contador++;
let contadora = 1;
let contadore = 10;
console.log( contador);
console.log( contadora++);
console.log( contadora)
console.log( ++contadora)
console.log( --contadore);
console.log( --contadore);

const passo = 2;
let adição = 0;
adição = adição + passo;
console.log( adição)
adição = adição + passo;
console.log( adição)
adição = adição + passo;
console.log( adição)
adição = adição + passo;
console.log( adição)

let adição1 = 2;
adição1 *= 5;
adição1 *= 5;
console.log(adição1)

const num3 = 1;
const num4 = 'will';
console.log( num3 * num4)
const num5 = parseInt('32');
console.log( typeof num5)
console.log( num5 + num3)
const num6 = parseFloat('1.2');
console.log(num5 + num6);
const num7 = Number('3');
console.log(num7 + num3);