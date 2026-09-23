function calcularQuadrado() {
    // Captura o campo de entrada e o elemento de resultado
    const inputNumero = document.getElementById('numero');
    const elementoResultado = document.getElementById('resultado');
    
    // Obtém o valor digitado
    const valor = inputNumero.value;

    // Valida se o usuário preencheu o campo
    if (valor === '') {
        elementoResultado.innerText = 'Por favor, digite um número inteiro.';
        return;
    }

    // Converte o valor para um número inteiro
    const numero = parseInt(valor, 10);

    // Calcula o quadrado
    const quadrado = numero ** 2;

    // Exibe o resultado na página
    elementoResultado.innerText = `O quadrado de ${numero} é ${quadrado}.`;
}