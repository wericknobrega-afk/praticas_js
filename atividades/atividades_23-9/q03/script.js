function converterPolegadas() {
    const inputPolegadas = document.getElementById('polegadas');
    const elementoResultado = document.getElementById('resultado');
    
    const valor = inputPolegadas.value;

    // Validação de campo vazio
    if (valor === '') {
        elementoResultado.innerText = 'Por favor, digite um valor em polegadas.';
        return;
    }

    // Converte para número decimal (ponto flutuante)
    const polegadas = parseFloat(valor);

    // Fator de conversão: 1 polegada = 2.54 cm
    const centimetros = polegadas * 2.54;

    // Exibe o resultado formatado com 2 casas decimais
    elementoResultado.innerText = `${polegadas} polegada(s) equivale a ${centimetros.toFixed(2)} cm.`;
}