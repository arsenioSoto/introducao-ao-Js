console.log("Condicionais e Operadores");

const listaDeNome = new Array(
    'Cinema',
    'Carnaval',
    'Bilhete'
);


const idade = 18;
const solteiro = false;
const temDinheiro = true;

console.log(listaDeNome);

//if (idade >= 18 || temDinheiro == true) {
//console.log("Boa compra");
//listaDeNome.splice(1, 1);
//} else {
//console.log("Nao pode comprar");
//}

//console.log(listaDeNome);

if (idade >= 18 && temDinheiro == true) {
    console.log("Boa compra");
    listaDeNome.splice(1, 1);
} else {
    console.log("Nao pode comprar");
}

console.log(listaDeNome);