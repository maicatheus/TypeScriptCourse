// Spread Operator

//... recebe todas os argumentos e trata como array.
const convidados = (...nome) =>{
    console.log("Seja bem vindo");
    console.log(nome);

}
convidados("Matheus","Maria","Roberto")

let pessoa = {
    nome: "Matheus",
    sobrenome: "Maica",
    empresa: "SICREDI",
    cargo:"Programador Fullstack"
};


const sorteio = (...numeros) => {
    const numeroGerado = Math.floor(Math.random() *numeros.length);
    console.log(numeros[numeroGerado]);
}

sorteio(1,3,6,2,77,3,5,7,9,23)