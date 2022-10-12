let pessoa = {
    nome: "Matheus",
    sobrenome: "Maica",
    empresa: "SICREDI",
    cargo:"Programador Fullstack"
};

let nome ="teste"

// nome:nomePessoarenomeia o nome da propriedade nome do objeto
const {nome:nomePessoa, cargo , empresa} = pessoa;

console.log(nomePessoa);
console.log(cargo);
console.log(empresa);

//=============

let nomes = ["Matheus", "Lucas", "Camila"];

console.log(nome[0]);

let {0: nome1, 2:nome3, 1:nome2 } = nomes;

console.log(nome1, nome2,  nome3);

let [primeiroNome, segundoNome] = nomes;