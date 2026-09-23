function calcularPerimetro() {
    const inputRaio = document.getElementById('raio');
    const elementoResultado = document.getElementById('resultado');
    
    const valor = inputRaio.value;

    // Validação de campo vazio
    if (valor === '') {
        elementoResultado.innerText = 'Por favor, digite o valor do raio.';
        return;
    }

    const raio = parseFloat(valor);

    // Validação de raio negativo
    if (raio < 0) {
        elementoResultado.innerText = 'O raio deve ser um número positivo ou zero.';
        return;
    }

    // Fórmula da circunferência: C = 2 * π * r
    const perimetro = 2 * Math.PI * raio;

    // Exibe o resultado formatado com 2 casas decimais
    elementoResultado.innerText = `O perímetro (circunferência) para um raio de ${raio} é ${perimetro.toFixed(2)}.`;
}