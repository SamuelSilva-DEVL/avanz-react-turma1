let frutas = ['banana', 'maçã', 'morango', 'manga'];

// altera o array
// frutas.pop(); 
// frutas.push('melancia');

//frutas.shift();

//frutas.unshift('melancia');



// não alteram o array
const list = [
    { id: 1, country:'Russia', launches:32},
    { id: 2, country:'US', launches:23 },
    { id: 3, country:'China', launches:16 },
    { id: 4, country:'Europe(ESA)', launches:7 },
    { id: 5, country:'India', launches:4 },
    { id: 6, country:'Japan', launches:3 }
];


// forma imperativa
let list2 = [];
list.forEach((item) => {
    if(item.launches > 7){

        list2.push(item)
    }
})

console.log(list2);


// forma declarativa
let list3 = list.map((item) => item.id);

// remover 
let list4= list.map((item) => {
    return {
        id: item.id,
        country: item.country,
    }
});


let list5= list.map((item) => {
    return {
        id: item.id,
        country: item.country.toUpperCase(),
        
        
    }
});


let list6 = list.filter((item) => item.launches > 7);


let soma = list.reduce( ( acumulador, item ) => {
    return acumulador + item.launches;
}, 0 );

var paisEncontrado = list.find(item => item.country === 'Russia');


console.log(soma);