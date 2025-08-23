function classifica_idade(event) {
    event.preventDefault();

    const idade = Number(document.getElementById("idade").value);

    //Classificação de faixa_etaria
    let  faixa_etaria = "";
    if (idade >= 0 && idade < 15) {
        faixa_etaria = "Criança"
    } else if (idade >= 15 && idade < 30) {
       faixa_etaria = "Jovem"
    } else if (idade >= 30 && idade <= 60) {
        faixa_etaria = "Adulto(a)"
    } else {
        faixa_etaria = "Idoso(a)"
    }

    alert(`Faixa etária: ${faixa_etaria}\nIdade informada: ${idade}`);
}

document.getElementById('form').addEventListener('submit', classifica_idade);