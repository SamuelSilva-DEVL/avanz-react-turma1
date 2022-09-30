//forma literal
function minhaFuncao(){

} 

// função com  parâmetros
function sum(x, y){
    console.log(x + y);
}

sum(4, 6);

// Funcao anonima // Imediatamente chamada
(function(){console.log("IIEF")})()


// função Callback
function imprimir(){
    console.log('callback executado');
} 

function sum(funcao){
    //requisicao
    return funcao();
}
sum(imprimir);




// função com retorno
sum();

function sum(x, y){
    return x + y;
}


// Funções a uma variável

sum(4,5);
var sum = function(x, y) {
    return x + y;
}



// Arrows Functions ES6¨

let minhaFuncao = () => console.log('executa');