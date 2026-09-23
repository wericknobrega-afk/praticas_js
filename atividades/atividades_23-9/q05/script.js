function calcularSalario() {
    const inputValorHora = document.getElementById('valorHora');
    const inputHorasTrabalhadas = document.getElementById('horasTrabalhadas');
    const elementoResultado = document.getElementById('resultado');
    
    const valorHoraText = inputValorHora.value;
    const horasText = inputHorasTrabalhadas.value;

    // Validação de campos vazios
    if (valorHoraText === '' || horasText === '') {
        elementoResultado.innerText = 'Por favor, preencha todos os campos.';
        return;
    }

    const valorHora = parseFloat(valorHoraText);
    const horasTrabalhadas = parseFloat(horasText);

    // Validação de números negativos
    if (valorHora < 0 || horasTrabalhadas < 0) {
        elementoResultado.innerText = 'Os valores digitados devem ser maiores ou iguais a zero.';
        return;
    }

    // Cálculo do salário
    const salarioTotal = valorHora * horasTrabalhadas;

    // Formatação do valor para moeda brasileira (R$)
    const salarioFormatado = salarioTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Exibe o resultado na tela
    elementoResultado.innerText = `O salário total a receber é ${salarioFormatado}.`;
}