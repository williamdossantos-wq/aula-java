function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor (r)
}

const min = 1;
const max = 10;

function random2 (min1, max1){
    const r1 = Math.random() * (max1 - min1) + min1;
    return Math.floor (r1)
}

const min1 = 1;
const max1 = 20;

const num1 = random(min, max);
const num2 = random2(min1, max1); 

if (num1 > num2){
    console.log( `${num1} é maior que1 ${num2}`)
} else if ( num1 < num2){
    console.log(`${num2} é maior que2 ${num1}`)
} else if (num1 === num2){
    console.log(`${num1} é igual que ${num2}`)
}

const solu = (x, y) => x > y ? x : y;

console.log(solu(Math.random(),.0050));