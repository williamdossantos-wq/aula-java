let varA = 'A';
let varB = 'B';
let varC = 'C';

const varMOD = varA;
varA = varB;
varB = varC;
varC = varMOD;
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);