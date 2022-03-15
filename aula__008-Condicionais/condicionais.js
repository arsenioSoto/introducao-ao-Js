console.log("Estruturas condicionais");

const listaDeNome = new Array(
    'Cinema',
    'Carnaval',
    'Bilhete'
);


const idade = 16;

console.log(listaDeNome);

if (idade >= 18) {
    console.log("Comprado!");
    listaDeNome.splice(1, 1);
} else {
    console.log("Menor de idade!");
}
console.log(listaDeNome);