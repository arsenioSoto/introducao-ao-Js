console.log("Loops");

const listaDeNome = new Array(
    `Cinema`,
    `Carnaval`,
    `Bilhete`
);


const idade = 20;
const solteiro = false;
let temDinheiro = false;
let local = "Carnaval";

console.log(listaDeNome);

const compra = idade == 18 || temDinheiro;


let cont = 0;
let localExiste = false;

while (cont < 3) {
    console.log(listaDeNome[cont]);

    cont += 1;

    if (listaDeNome[cont] === local) {
        localExiste = true;
        break;
    } else {
        console.log("Destino nao existe");
    }
}

console.log("Local existe: " + localExiste);

if (compra && localExiste) {
    console.log("Ola, seja bem vindo!");
} else {
    console.log("Desculpe tivemos um erro no sistema!");
}


for (let i = 0; i < 3; i++) {
    if (listaDeNome[i] == local) {
        localExiste = true;
        break;
    } else {
        console.log("Destino nao existe");
    }
}