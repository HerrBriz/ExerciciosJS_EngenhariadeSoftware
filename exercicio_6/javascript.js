function calculadora(event) {
    event.preventDefault();

    const n1 = Number(document.getElementById("numero1").value);
    const n2 = Number(document.getElementById("numero2").value);
    const operacao = document.getElementById("operacao").value;

    let resultado;

    if (operacao === "soma") {
        resultado = n1 + n2;
    } else if (operacao === "subtração") {
        resultado = n1 - n2;
    }

    alert(`O resultado é: ${resultado}`);
}

document.getElementById('form').addEventListener('submit', calculadora);