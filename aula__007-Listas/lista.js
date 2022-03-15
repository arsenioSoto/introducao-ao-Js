console.log(`Trabalhando com listas`);

//const nome1 = "Arsenio";
//const nome2 = "Soto";
//const nome3 = "Junior";

const listaDeNome = new Array(
    'Arsenio',
    'Junior',
    'Soto'
);
console.log(listaDeNome);

listaDeNome.push('Jose');

console.log(listaDeNome);

listaDeNome.pop();
console.log(listaDeNome);

console.log(listaDeNome[1], listaDeNome[0]);