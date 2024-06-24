const num1 = [1,2,3];
const num2 = [4,5,6];
//const num3 = num1.concat(num2, [7,8,9] , 'luiz')
const a3 = [...num1, 'william', ...num2, ...[1,2,3]]
console.log(a3)