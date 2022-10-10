
// function exibirNome(){
//     console.log(nome);
// }

// exibirNome();

// var nome = 'dezmetrio';


// function exibirMensagem() {
//     if(true) { 
//         var escopoFuncao = 'escopo funcao'; 
//         let escopoBloco = 'escopo bloco';

//        console.log(escopoBloco); 
//    } 
//    console.log(escopoFuncao); 
// //    console.log(escopoBloco); 
// }

// exibirMensagem();

type Pessoa = {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Endereco = {
    rua: string;
    
}

interface Pessoa2 {
    nome: string;
    sobrenome: string;
    

}


interface Pessoa3 extends Pessoa2 {
    endereco: string;
    

}


let pessoa: Pessoa | Pessoa2;

pessoa = {
    nome: 'carlos',
    sobrenome: 'maia',
    
};

// const nome2 = 'charles'

