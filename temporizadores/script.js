//setInterval
// Vaiexecutar de tempos em tempos

const acao = () =>{
    document.write("Acao!  ...<br>")
}

var timer  = setInterval(() => {
    document.write("Executando como anônima  ...<br>")
},500)

// clearInterval(timer)
//isto para o set interval

// setTimeout
setTimeout(acao,3000)
//depois de 3000 msegundos que a pagina carregat,
// ele executa a funcao acao