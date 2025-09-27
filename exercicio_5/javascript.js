function calcula_salario(event) {
    event.preventDefault();

    const codigo = Number(document.getElementById("codigo").value);
    const horas = Number(document.getElementById("horas").value);
    const turno = document.querySelector("input[name='turno']:checked")?.value;
    const categoria = document.querySelector("input[name='categoria']:checked")?.value;
    const salarioMinimo = Number(document.getElementById("salarioMinimo").value);

    if (!turno || !categoria) {
        alert("Por favor, selecione turno e categoria!");
        return;
    }

    // Calcular valor da hora trabalhada
    let valorHora = 0;
    if (categoria === "G") {
        if (turno === "N") {
            valorHora = salarioMinimo * 0.20;
        } else {
            valorHora = salarioMinimo * 0.04;
        }
    } else if (categoria === "F") {
        if (turno === "N") {
            valorHora = salarioMinimo * 0.13;
        } else {
            valorHora = salarioMinimo * 0.01;
        }
    }

    // Salário inicial
    const salarioInicial = valorHora * horas;

    // Auxílio alimentação
    let auxAlimentacao = 0;
    if (salarioInicial < 800) {
        auxAlimentacao = salarioInicial * 0.25;
    } else if (salarioInicial <= 1200) {
        auxAlimentacao = salarioInicial * 0.20;
    } else {
        auxAlimentacao = salarioInicial * 0.15;
    }

    alert(`Código: ${codigo}\nHoras trabalhadas: ${horas}\nValor da hora: R$ ${valorHora.toFixed(2)}\nSalário inicial: R$ ${salarioInicial.toFixed(2)}\nAuxílio alimentação: R$ ${auxAlimentacao.toFixed(2)}`);
}

document.getElementById('form').addEventListener('submit', calcula_salario);