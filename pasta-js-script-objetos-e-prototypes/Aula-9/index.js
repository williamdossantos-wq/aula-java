const pessoas = [
    {id :3, nome: 'william'},
    {id :2, nome: 'julia'},
    {id :1, nome: 'rui'},
    {id :0, nome: 'rueeri'},
    {id :-1, nome: 'ruioooi'},


];
const novasPessoa = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoa.set(id, {...pessoa});
}
console.log(novasPessoa)