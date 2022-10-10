const fetch = require('node-fetch');


console.log('inicio');
// POST GET PUT DELETE PATCH
fetch('https://dummyjson.comr/posts/1')
.then(res => res.json())
.then((dados) => console.log(dados))
.catch(() => console.log('ocorreu um erro'))


async function getPosts() {
    console.log('antes de iniciar');
    let response = await fetch(`https://dummyjson.com/posts/1`);
    console.log('requisicao terminada');
    let userData = await response.json();
    console.log('dados covertidos para json');
    console.log(userData);
}

getPosts();






