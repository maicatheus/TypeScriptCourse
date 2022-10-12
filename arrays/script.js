function arrays01(){
    let lista = ["Matheus", "Lucas", 22, "Maria"]    
    console.log(lista);

    lista[0] = "Maica"
    console.log(lista);
    
    console.log(lista.indexOf(22));
    
    lista.push("Matheus")
    console.log(lista);
    
    //remove primeiro elemento
    lista.shift()
    console.log(lista);
    
    //remove o ultimo
    lista.pop()
    console.log(lista);

    console.log(lista.join(";"));
}