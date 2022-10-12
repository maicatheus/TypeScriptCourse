// Spread Operator

let primeiros = [1, 2, 3,"macaco",];


// ...{nome da lista} adicionatudo de dentro da lista na nova  variável

let numeros = [...primeiros,4, 5, 10];

console.log(numeros);

let pessoa = {
    nome: "Matheus",
    sobrenome: "Maica",
    empresa: "SICREDI",
    cargo:"Programador Fullstack"
};

console.log(pessoa);

let novaPessoa  = {
    ...pessoa,
    status:"ATIVO",
    cidade:"Alvorada / RS"
};

console.log(novaPessoa);


const novoUsuario = (info) =>{
    let data ={
        ...info,
        status:"ATIVO",
        inicio:"12/10/2022",
        CODIGO:"264449"
    }
    console.log(data);
}

novoUsuario({nome:  "José", sobrenome:  "Silva", cargo:"Dev"})
