function classificadora(event) {
    event.preventDefault();

    const laboratorio = parseFloat(document.getElementById("notalaboratorio").value).toFixed(2);
    const prova = parseFloat(document.getElementById("notaprova").value).toFixed(2);
    const trabalho = parseFloat(document.getElementById("notatrabalho").value);

    const media = ((laboratorio * 2) + (prova * 5) + (trabalho * 3) / 10).toFixed(2);

    if (media > 9){
        let classificacao = "A";
    } else if (media > 8 && media <= 9){
        classificacao = "B";
    } else if (media > 7 && media <= 8){
        classificacao = "C";
    } else if (media > 6 && media <= 7){
        classificacao = "D";
    } else if (media > 5 && media <= 6){
        classificacao = "E";
    } else {
        classificacao = "F";
    }
    alert(`A média do aluno = ${media} e a sua classificação é ${classificacao}`);

}

document.getElementById('form').addEventListener('submit', classificadora);