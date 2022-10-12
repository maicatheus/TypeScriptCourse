// MAP -> Percorre todo valor e aplica alguma função
console.log("==========|    MAP   |===============");
let lista =  ["Matheus","José","Maria","Pedro"];

lista.map((item, index) =>  {
    
    console.log(`${index} => PASSANDO: ${item}`)
    
})

let numeros = [ 1, 1, 1, 7];

console.log("==========|    REDUCE   |===============");
let total = numeros.reduce((acumulador,numero,indice,original) =>{
    console.log(`${acumulador} - Total até o momento`);
    console.log(`${numero} - Valor atual`);
    console.log(`${indice} - Indice atual`);
    console.log(`${original} - Array  original`);
    console.log("=========");
    return acumulador += numero;
})
console.log(`${total} - Total do reduce`);

console.log("==========|    FIND   |===============");
let listagem = [5,3,"jose",2,"matheus","batata"]
let busca = listagem.find((item)=>{
    if(item === "matheus"){
        return console.log("Encontrou")
    }   
})
console.log(busca);

console.log("==========|    FILTER   |===============");
let palavras = ["matheus", "ana", "jose","pietra","lucas"]

let retorno = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(retorno);