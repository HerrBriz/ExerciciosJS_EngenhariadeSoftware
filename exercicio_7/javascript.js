function formata_data(event) {
    event.preventDefault();

    const [dia, mes, ano] = document.getElementById("data").value.split("/");

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    alert(`${dia} de ${meses[parseInt(mes, 10) - 1]} de ${ano}`);
}

document.getElementById('form').addEventListener('submit', formata_data);