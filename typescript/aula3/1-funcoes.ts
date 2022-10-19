//forma literal
// function minhaFuncao(){

// } 

// função com  parâmetros
type Props = {
    x:number;
    y:number;
}

function Header({x, y}:Props) {
    return x + y;
}

Header({x: 1, y: 3});









// função com retorno
// sum();

// function sum(x, y){
//     return x + y;
// }


// Funções a uma variável

// sum(4,5);
// var sum = function(x, y) {
//     return x + y;
// }



// Arrows Functions ES6¨

 let minhaFuncao = (x: number, y:number): number => {
    if(x>10){
        return x+y;
    }

    return String(x+y);
 };