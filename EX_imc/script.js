
const calcularImc = (event) => {
    event.preventDefault();//evitar o refresh da página

    let resultado;

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
   
    let imc = peso/altura**2
    imc = imc.toFixed(2)
    resultado = document.getElementById('resultado');

    if(imc<17){
        resultado.innerHTML = `<br> Seu IMC é: ${imc}<br><br>Cuidado, você está muito abaixo do peso`
    }else if(imc>=17 && imc <=18.48){
        resultado.innerHTML = `<br> Seu IMC é: ${imc}<br><br>Você está abaixo do peso`
    }else if(imc >= 18.48 && imc <= 24.99){
        resultado.innerHTML = `<br> Seu IMC é: ${imc}<br><br>Você está no peso ideal`       
    }else if(imc >24.99 && imc <=29.99){
        resultado.innerHTML = `<br> Seu IMC é: ${imc}<br><br>Você está acima do peso ideal`       
    }else{
        resultado.innerHTML = `<br> Seu IMC é: ${imc}<br><br>Cuidado! Obesidade!`       
    }

    document.getElementById("peso").value="";
    document.getElementById("altura").value ="";
}
