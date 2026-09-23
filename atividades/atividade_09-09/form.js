const formDados = document.getElementById("formDados");

function atualizarDados(evento) {
  evento.preventDefault();

  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;

  const pNomeUsuario = document.getElementById("nomeUsuario"); // pega um elemento pelo ID
  pNomeUsuario.textContent = "O nome do usuário é: " + nome;
  pNomeUsuario.style.display = "block";

  const pIdade = document.getElementById("idadeUsuario"); // pega um elemento pelo ID
  pIdade.textContent = "A idade do usuário é: " + idade;
  pIdade.style.display = "block";
}

formDados.addEventListener("submit", atualizarDados);