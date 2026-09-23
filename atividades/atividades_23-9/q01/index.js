const formDados = document.getElementById("formDados");

function converter(evento) {
  evento.preventDefault();

  let valorReais = Number(document.getElementById("valorReais").value);
  let valorDolar = valorReais / 5.14;

  const pResultado = document.getElementById("resultado"); // pega um elemento pelo ID
  pResultado.textContent = "O resultado da converso: US$" + valorDolar.toFixed(2);
}

formDados.addEventListener("submit", converter);