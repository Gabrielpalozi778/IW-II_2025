// Função chamada ao clicar no botão
function mostrarmensagem() {
    alert("JavaScript é divertido!");
}

// Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
});