function calculaIMC(event) {
    event.preventDefault();

    const nome = document.getElementById("name").value;
    const peso = parseFloat(document.getElementById("weight").value)
    const altura = parseFloat(document.getElementById("height").value) / 100;

    const imc = (peso / (altura * altura)).toFixed(2)

    //Classificação de IMC
    let classificacao = "";
    if (imc < 16) {
        classificacao = "Baixo peso muito grave"
    } else if (imc >= 16 && imc <= 16.99) {
        classificacao = "Baixo peso grave"
    } else if (imc >= 17 && imc <= 18.4) {
        classificacao = "Baixo peso"
    } else if (imc >= 18.50 && imc <= 24.99) {
        classificacao = "Peso normal"
    } else if (imc >=25 && imc <= 29.99) {
        classificacao = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.99) {
        classificacao = "Obesidade grau I"
    } else if (imc >= 35 && imc <= 39.99) {
        classificacao = "Obesidade grau II" 
    } else if (imc >= 40) {
        classificacao = "Obesidade grau III"
    }

    alert(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: " + classificacao)

}

document.getElementById('form').addEventListener('submit', calculaIMC);
