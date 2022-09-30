const pessoa = {
    nome: 'Lindemberg',
    sobrenome: 'castro',
    idade: 43,
    desenvolvedor: true,
    altura: 1.86,
    'nascido em': '1978',
    pets: [
        { name: 'stark', idade: 8},
    ],
    dependentes: ['davi', 'adriana'],
    mostraNome: () => console.log(pessoa.nome + ' ' + pessoa.sobrenome)
    
}

// notacao de ponto
// console.log(pessoa.nome);


// // notacao de array
// console.log(pessoa['idade']);

//iterar 
for(let chave in pessoa){
    console.log(chave);
}


const { nome, sobrenome } = pessoa;

console.log(nome);