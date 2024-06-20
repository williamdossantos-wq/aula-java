function* geradora1() {
    //codigo
yield 'valor 1';
//codigo
yield 'valor 2';
//cosigo
yield 'valor 3';
};

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

function* geradora2() {
let i = 0;
while(true) {
    yield i;
    i++;
}
};
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
};
function* geradora4() {
    geradora3();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}
const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
};
function* geradora5() {
    yield function () {
        console.log('vim don 1');
    };
    yield function() {
        console.log('vim do 2');
    };
    yield function() {
        console.log('vim do 3');
    };
};
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();