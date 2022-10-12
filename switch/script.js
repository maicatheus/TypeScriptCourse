const pedir = () =>{
    var valor = prompt("Escolha um opção: ");

    switch(Number(valor)){
        case 1:
            alert("Você escolheu 1 = Suco")
            break;
        case 2:
            alert("Você escolheu 2 = Agua gelada")
            break;
        case 3:
            alert("Você escolheu 3 = Sorvete")
            break;
        case 4:
            alert("Você escolheu 4 = Chamou garçom")
            break;
        default:
            alert("Escolha um valor entre 1 e 4")
            break;
    }
}