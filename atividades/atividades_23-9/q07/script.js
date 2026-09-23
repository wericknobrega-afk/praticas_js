function encontrarImpares() {
    const inputValor1 = document.getElementById('valor1');
    const inputValor2 = document.getElementById('valor2');
    const elementoResultado = document.getElementById('resultado');

    const str1 = inputValor1.value;
    const str2 = inputValor2.value;

    // Validação de campos vazios
    if (str1 === '' || str2 === '') {
        elementoResultado.innerText = 'Por favor, preencha os dois valores.';
        return;
    }

    const n1 = parseInt(str1, 10);
    const n2 = parseInt(str2, 10);

    // Identifica o menor e o maior valor para garantir a ordem correta do intervalo
    const inicio = Math.min(n1, n2);
    const fim = Math.max(n1, n2);

    const impares = [];

    // Percorre o intervalo (incluindo os limites) verificando se o número é ímpar
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }

    // Exibe o resultado na tela
    if (impares.length > 0) {
        elementoResultado.innerText = `Números ímpares entre ${inicio} e ${fim}: ${impares.join(', ')}`;
    } else {
        elementoResultado.innerText = `Não foram encontrados números ímpares no intervalo fornecido.`;
    }
}