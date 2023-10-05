document.getElementById("Form").addEventListener("submit", function (e) {
    e.preventDefault();
    let z, y;
    const tratamento = document.getElementById("tratamento").value;
    const nome = document.getElementById("nome").value;
    let ano = parseInt(document.getElementById("idade").value);
    let n = 2023 - ano;
    let classificacao;
    if (tratamento === "Selecione uma Opção") {
        document.getElementById("trat").textContent = "Selecione uma opção de tratamento válida";
    } else {

        if (n <= 10) {
            classificacao = "Uma Criança";
        } else if (n <= 25) {
            classificacao = "Um Jovem";
        } else if (n <= 60) {

            classificacao = "Um Adulto";
        } else {

            classificacao = "Um Idoso";
        }
        var node = document.getElementById("trat");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        document.getElementById("message").textContent = tratamento + " " + nome + " é " + classificacao + ", pois possui " + n + " anos de idade.";
    }


});