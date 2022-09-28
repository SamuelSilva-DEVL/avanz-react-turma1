//TIPOS PRIMITIVOS OU DE VALOR
// undefined
// null
// boolean
// number
// string
// symbol

const nome = 'carlos';
console.log(typeof nome);


let nome2 = nome;

nome2 = 'marcos';

console.log(nome);

//TIPOS REFERENCIA
//object

const item = { counter: 0 }

const novoItem = {...item}

novoItem.counter = 1;

console.log(item);


