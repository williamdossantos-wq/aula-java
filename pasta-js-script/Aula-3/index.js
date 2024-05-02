/*
&& -> false && true -> false 'o valor mesmo'
|| -> true || false = true 'vai retornar o valor verdadeiro'

FALSY
false
0 
"" '' ``
null / undefined
NaN

*/

console.log('william' && 'oe');
function falaOi (){
    return 'oi';

}
const vaiExecurtar = NaN;
console.log(vaiExecurtar && falaOi());

console.log(NaN || false || null || 'william'|| true ); // vai achar o primeiro valor verdadeiro 