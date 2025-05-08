// Função chamada ao clicar no botão
function saudacao() {
    alert("Olá, bem-vindo à aula!");
}

// Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
});