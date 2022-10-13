//includes, startWith, endWith

let nomes = ["Matheus", "Lucas", "Ana"]

console.log(nomes.includes("Ana")); //true
console.log(nomes.includes("Gioconda")); // false
console.log(nomes.includes("Matheus")); // true

if(nomes.includes("Matheus")){
    console.log("Matheus está na lista!");   
}else{
    console.log("Matheus não está na lista");
}

//START WITH

let nome ="Matheus"
console.log(nome.startsWith("Mat"));//true

//END WITH
let cidade =  "Alvorada"
console.log(cidade.endsWith("eda"));false
console.log(cidade.endsWith("ada"));true