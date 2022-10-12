var area = document.getElementById("area")


const entrar = ()=>{
    var nome = prompt("Digite seu nome")
    if(nome === '' || nome  === null){
        alert("Ops, algo deu errado!")
        area.innerHTML = "Clique no botão para acessar..."
    }else{
        area.innerHTML = `Bem vindo, ${nome} `;

        //criando um botão e fazendo append no h2
        let botaoSair = document.createElement("button");
        botaoSair.innerText  = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair)
    }
}

const sair = () =>{
    alert("Até mais!")
    area.innerHTML ="Você saiu!"

}


const mediaAluno = (nota1, nota2) =>{
    let media = (nota1 + nota2)/2

    if(media >= 7){
        console.log(`Aluno foi aprovado com média ${media}`);
    }else{
        console.log(`Aluno foi reprovado com média ${media}`);
    }
}

const aluno =(nome, curso) =>{
    let mensagem = `Seja bem vindo ao curso de ${curso}, ${nome}`
    console.log(mensagem);
}