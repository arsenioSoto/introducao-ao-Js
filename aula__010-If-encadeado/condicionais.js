console.log("If-Encadeado");

const listaDeNome = new Array(
    'Cinema',
    'Carnaval',
    'Bilhete'
);


const idade = 89;
const solteiro = false;

console.log(listaDeNome);

if (idade >= 18) {
    console.log("Comprado!");
    listaDeNome.splice(1, 1);
} else if (solteiro == true) {
    console.log("Esta Acompanhado");
    listaDeNome.splice(1, 1);
} else {
    console.log("Menor de idade!");
}
console.log(listaDeNome);