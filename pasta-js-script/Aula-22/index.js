try {
    //É executada quando não há erros
    //console.log(wq)
    console.log('abrir o arquivo');
    console.log('Manipulei o arquivo e gerrou error');
    console.log('Fchei o arquivo');

    try {
        console.log(a)
    } catch (error) {
        console.log('Deu error')
    } finally {
        console.log('finally , de novo')
    }

} catch (e) {
    //É executada quando há error
    console.log('Tratado o error');
} finally {
    //Sempre
    console.log('FINALLY: Eu sempre sou executado')
}


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperendo instancia de Date.')
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
const data = new Date('01-01-1970 12:55:12')
const hora = retornaHora(data);
console.log(hora);}
catch(e){
//Trata error
}finally{
    console.log('tenha um bom dia')
}
