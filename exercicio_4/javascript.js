function calcula_frete(event) {
    event.preventDefault();

    const quantidade = Number(document.getElementById("quantidade").value);
    const distancia = Number(document.getElementById("distancia").value);
    const rastreamento = document.querySelector("input[name='rastreamento']:checked")?.value;
    const regiao = document.querySelector("input[name='regiao']:checked")?.value;

    if (!rastreamento || !regiao) {
        alert("Por favor, selecione rastreamento e região!");
        return;
    }

    // Valores base por região
    let precoBase, desconto;
    switch (regiao) {
        case "1": // Sul
            precoBase = 1.00;
            desconto = 0.10;
            break;
        case "2": // Sudeste
            precoBase = 1.20;
            desconto = 0.12;
            break;
        case "3": // Centro-Oeste
            precoBase = 1.30;
            desconto = 0.13;
            break;
    }

    // Cálculo das peças
    let valorPecas = 0;
    if (quantidade <= 1000) {
        valorPecas = quantidade * precoBase;
    } else {
        valorPecas = (1000 * precoBase) + ((quantidade - 1000) * (precoBase * (1 - desconto)));
    }

    // Cálculo combustível
    let valorCombustivel = distancia * 1; // 1 litro/km

    // Taxa rastreamento
    let taxaRastreamento = rastreamento === "S" ? 200 : 0;

    // Total
    let total = valorPecas + valorCombustivel + taxaRastreamento;

    alert(`Taxa de rastreamento: R$ ${taxaRastreamento.toFixed(2)}\nValor do frete pelas peças: R$ ${valorPecas.toFixed(2)}\nValor do frete por quilômetro: R$ ${valorCombustivel.toFixed(2)}\nTotal do frete: R$ ${total.toFixed(2)}`);
}

document.getElementById('form').addEventListener('submit', calcula_frete);