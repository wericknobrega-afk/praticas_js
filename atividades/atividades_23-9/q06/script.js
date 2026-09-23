function calcularNotaFinal() {
    const inputNota1 = document.getElementById('nota1');
    const inputNota2 = document.getElementById('nota2');
    const elementoResultado = document.getElementById('resultado');

    const strNota1 = inputNota1.value;
    const strNota2 = inputNota2.value;

    // Validação de campos vazios
    if (strNota1 === '' || strNota2 === '') {
        elementoResultado.innerText = 'Por favor, preencha as notas das duas etapas.';
        elementoResultado.style.color = 'black';
        return;
    }

    const n1 = parseFloat(strNota1);
    const n2 = parseFloat(strNota2);

    // Validação do intervalo das notas (0 a 10)
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
        elementoResultado.innerText = 'As notas devem estar entre 0,0 e 10,0.';
        elementoResultado.style.color = 'black';
        return;
    }

    // Cálculo da Média Ponderada: (N1 * 2 + N2 * 3) / (2 + 3)
    const mediaFinal = (n1 * 2 + n2 * 3) / 5;

    // Formatação da média com 1 casa decimal
    const mediaFormatada = mediaFinal.toFixed(1);

    // Verificação de Aprovação (nota mínima 6.0)
    if (mediaFinal >= 6.0) {
        elementoResultado.innerHTML = `Sua nota final é <strong>${mediaFormatada}</strong>. Você está <strong style="color: green;">APROVADO</strong>!`;
    } else {
        elementoResultado.innerHTML = `Sua nota final é <strong>${mediaFormatada}</strong>. Você está <strong style="color: red;">REPROVADO</strong>.`;
    }
}